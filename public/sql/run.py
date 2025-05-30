import json
from datetime import date
from pathlib import Path

import duckdb

# Directories
PARENT_DIR = Path(__file__).parent
DATA_DIR = Path(__file__).parent.parent.joinpath("data")

# File paths
LANG_SQL_FILE = PARENT_DIR.joinpath("count_wits_and_texts_per_lang.sql")
WIT_COUNT_SQL_FILE = PARENT_DIR.joinpath("wit_distribution.sql")
DB_PATH = DATA_DIR.joinpath("heurist.db")

with open(LANG_SQL_FILE) as f:
    LANG_SQL = f.read()

with open(WIT_COUNT_SQL_FILE) as f:
    WIT_COUNT_SQL = f.read()


def write_output(conn, sql, outfile):
    # Select the aggregated data from the database
    rel = conn.sql(sql)
    dicts = []
    for row in rel.fetchall():
        dicts.append({k: v for k, v in zip(rel.columns, row)})

    # Append the date to the JSON object
    date_string = date.today().isoformat()
    data = {"lastModified": date_string, "items": dicts}

    # Write the JSON object
    with open(DATA_DIR.joinpath(outfile), "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def main():
    # Connect to the downloaded Heurist database
    conn = duckdb.connect(str(DB_PATH))

    write_output(conn=conn, sql=LANG_SQL, outfile="lang_aggregates.json")
    write_output(conn=conn, sql=WIT_COUNT_SQL, outfile="wit_distribution.json")


if __name__ == "__main__":
    main()
