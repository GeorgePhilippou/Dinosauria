#!/usr/bin/env python3
"""Fetch PBDB ecospace data (diet/locomotion/life habit) for every genus in
data/pbdb-enrichment.js and add it as an "ecospace" key on each entry.

Usage: python3 tools/fetch_pbdb_ecospace.py
"""
import json
import re
import subprocess
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PBDB_FILE = ROOT / "data" / "pbdb-enrichment.js"

HEADER = "// Generated from the Paleobiology Database API. Do not edit manually.\n// PBDB is used as an occurrence/taxonomy enrichment layer; NHM remains the main public profile source.\n"


def fetch_ecospace(taxon_id):
    url = f"https://paleobiodb.org/data1.2/taxa/single.json?id={taxon_id}&show=ecospace"
    for attempt in range(4):
        proc = subprocess.run(
            ["curl", "-s", "-m", "10", "-w", "\n%{http_code}", url],
            capture_output=True, check=True,
        )
        out = proc.stdout.decode("utf-8")
        body, _, status = out.rpartition("\n")
        status = int(status)
        if status == 429:
            time.sleep(8 * (attempt + 1))
            continue
        if status != 200:
            return None
        data = json.loads(body)
        records = data.get("records") or []
        return records[0] if records else None
    return None


def main():
    content = PBDB_FILE.read_text()
    m = re.search(r'window\.PBDB_DINOSAUR_ENRICHMENT\s*=\s*(\{.*\});', content, re.S)
    enrichment = json.loads(m.group(1))

    print(f"Found {len(enrichment)} entries")
    updated = 0
    skipped = 0
    failed = []

    for slug, entry in enrichment.items():
        if "ecospace" in entry:
            skipped += 1
            continue
        taxon_id = entry.get("taxonId")
        if not taxon_id:
            continue
        try:
            record = fetch_ecospace(taxon_id)
        except Exception as e:
            failed.append((slug, str(e)))
            time.sleep(0.5)
            continue

        ecospace = {}
        if record:
            if record.get("jdt"):
                ecospace["diet"] = record["jdt"]
            if record.get("jmo"):
                ecospace["locomotion"] = record["jmo"]
            if record.get("jlh"):
                ecospace["lifeHabit"] = record["jlh"]

        if ecospace:
            entry["ecospace"] = ecospace
            updated += 1
        time.sleep(0.5)

    print(f"Updated {updated}, already had ecospace {skipped}, failed {len(failed)}")
    if failed:
        for slug, reason in failed:
            print(f"  {slug}: {reason}")

    out = HEADER + "window.PBDB_DINOSAUR_ENRICHMENT = " + json.dumps(enrichment, indent=2, ensure_ascii=False) + ";\n"
    PBDB_FILE.write_text(out)
    print(f"Wrote {PBDB_FILE}")


if __name__ == "__main__":
    main()
