import json
from datetime import date
from pathlib import Path

import duckdb

# Directories
PARENT_DIR = Path(__file__).parent
DATA_DIR = Path(__file__).parent.parent.joinpath("data")

# File paths
SQL_FILE = PARENT_DIR.joinpath("count_wits_and_texts_per_lang.sql")
DB_PATH = DATA_DIR.joinpath("heurist.db")

with open(SQL_FILE) as f:
    SQL = f.read()


def main():
    # Connect to the downloaded Heurist database
    conn = duckdb.connect(str(DB_PATH))

    # Select the aggregated data from the database
    rel = conn.sql(SQL)
    dicts = []
    for row in rel.fetchall():
        dicts.append({k: v for k, v in zip(rel.columns, row)})

    # Append the date to the JSON object
    date_string = date.today().isoformat()
    data = {"lastModified": date_string, "items": dicts}

    # Write the JSON object
    with open(DATA_DIR.joinpath("lang_aggregates.json"), "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


if __name__ == "__main__":
    main()
