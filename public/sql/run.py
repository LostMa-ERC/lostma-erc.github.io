import json
from datetime import date
from pathlib import Path

import click
import duckdb

SQL_DIR = Path(__file__).parent
DATA_DIR = Path(__file__).parent.parent.joinpath("data")
DB_PATH = DATA_DIR.joinpath("heurist.db")


@click.command()
@click.option("-q", "--query", type=click.STRING)
def main(query):
    infile = SQL_DIR.joinpath(query + ".sql")
    outfile = DATA_DIR.joinpath(query + ".json")
    with open(infile) as f:
        sql = f.read()

    conn = duckdb.connect(str(DB_PATH))
    rel = conn.sql(sql)
    dicts = []
    for row in rel.fetchall():
        dicts.append({k: v for k, v in zip(rel.columns, row)})

    date_string = date.today().isoformat()
    data = {"lastModified": date_string, "items": dicts}

    with open(outfile, "w") as f:
        json.dump(data, f, indent=2)


if __name__ == "__main__":
    main()
