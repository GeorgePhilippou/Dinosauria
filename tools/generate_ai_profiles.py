#!/usr/bin/env python3
"""
generate_ai_profiles.py

For each of the 228 NHM-imported genera that don't yet have a hand-curated
RICH_CONTENT entry, calls the Claude API to write a full rich profile in the
same schema used by the 100 curated genera:

  overview       — 2 factual paragraphs
  fossilSites    — 2–4 named sites with coordinates
  focusedClade   — taxonomic trunk + side branches
  articles       — 3–4 named sections (discovery, anatomy, ecology, etc.)
  citations      — NHM + Wikipedia + PBDB links

Output: data/ai-enriched-profiles.js
        window.AI_ENRICHED_PROFILES = { "genusid": {...}, ... }

Usage:
  export ANTHROPIC_API_KEY="sk-ant-..."
  python3 tools/generate_ai_profiles.py            # all 228 genera
  python3 tools/generate_ai_profiles.py --limit 5  # quick test run
  python3 tools/generate_ai_profiles.py --genus deinocheirus guanlong
"""

import anthropic
import json
import re
import os
import sys
import time
import argparse
from pathlib import Path

ROOT = Path(__file__).parent.parent
OUT_FILE = ROOT / 'data' / 'ai-enriched-profiles.js'
PROGRESS_FILE = ROOT / 'data' / 'ai-enriched-profiles.json'  # scratch file for resume

SOURCE_BASE = 'https://www.nhm.ac.uk/discover/dino-directory/'

COUNTRY_NAMES = {
    'AR': 'Argentina', 'AQ': 'Antarctica', 'AU': 'Australia', 'BR': 'Brazil',
    'CA': 'Canada', 'CN': 'China', 'DE': 'Germany', 'EG': 'Egypt', 'ES': 'Spain',
    'FR': 'France', 'IN': 'India', 'JP': 'Japan', 'KZ': 'Kazakhstan', 'MA': 'Morocco',
    'MG': 'Madagascar', 'MW': 'Malawi', 'MN': 'Mongolia', 'NE': 'Niger',
    'PT': 'Portugal', 'RO': 'Romania', 'RU': 'Russia', 'TJ': 'Tajikistan',
    'TZ': 'Tanzania', 'GB': 'United Kingdom', 'UK': 'United Kingdom',
    'US': 'United States', 'UZ': 'Uzbekistan', 'ZA': 'South Africa', 'ZW': 'Zimbabwe'
}


# ── Data loading ──────────────────────────────────────────────────────────────

def load_js_window(path):
    """Execute a JS file that assigns to window.* and return the window dict."""
    src = Path(path).read_text()
    # Strip JS syntax to extract JSON-like assignments
    result = {}

    # Handle window.FOO = <value>;
    pattern = re.compile(r'window\.(\w+)\s*=\s*([\s\S]*?);\s*$', re.MULTILINE)
    for m in pattern.finditer(src):
        key = m.group(1)
        val_src = m.group(2).strip()
        try:
            result[key] = json.loads(val_src)
        except json.JSONDecodeError:
            pass  # skip non-JSON (arrays with JS expressions etc.)
    return result


def load_nhm_records(path):
    """Parse nhm-imported-dinosaurs.js into a list of dicts."""
    src = Path(path).read_text()
    m = re.search(r'window\.NHM_IMPORTED_DINOSAUR_RECORDS\s*=\s*(\[[\s\S]*?\]);', src)
    if not m:
        raise ValueError('Could not find NHM_IMPORTED_DINOSAUR_RECORDS')
    records = json.loads(m.group(1))
    keys = ['id','name','latin','meaning','type','period','mya','clade','subclade',
            'diet','locomotion','length','massKg','found','food','teeth','silhouette',
            'description','facts','pronunciation','sourceUrl','dataOrigin','sourceMeta']
    result = {}
    for row in records:
        d = {}
        for i, k in enumerate(keys):
            d[k] = row[i] if i < len(row) else None
        result[d['id']] = d
    return result


def load_pbdb(path):
    src = Path(path).read_text()
    m = re.search(r'window\.PBDB_DINOSAUR_ENRICHMENT\s*=\s*(\{[\s\S]*?\});', src)
    if not m:
        raise ValueError('Could not find PBDB_DINOSAUR_ENRICHMENT')
    return json.loads(m.group(1))


def load_wiki(path):
    src = Path(path).read_text()
    m = re.search(r'window\.WIKI_ENRICHMENT\s*=\s*(\{[\s\S]*?\});', src)
    if not m:
        raise ValueError('Could not find WIKI_ENRICHMENT')
    return json.loads(m.group(1))


def load_curated_ids(html_path):
    """Return set of genus IDs that already have RICH_CONTENT in index.html."""
    src = Path(html_path).read_text()
    # Look for the RICH_PROFILES / RICH_CONTENT blocks
    ids = set()
    for m in re.finditer(r'^\s{2}([a-z0-9_]+):\s*\{', src, re.MULTILINE):
        ids.add(m.group(1))
    return ids


# ── Prompt building ───────────────────────────────────────────────────────────

def nhm_val(v):
    if v is None:
        return None
    if isinstance(v, str) and re.match(r'^not listed by nhm$', v, re.I):
        return None
    return v


def build_prompt(d, pbdb, wiki):
    name = d['name']
    latin = d.get('latin') or name
    meaning = nhm_val(d.get('meaning'))
    diet = d.get('diet', '')
    type_ = d.get('type', '')
    period = d.get('period', '')
    mya = d.get('mya', '')
    clade = d.get('clade', '')
    subclade = d.get('subclade', '')
    length = d.get('length')
    mass_kg = d.get('massKg')
    found = d.get('found') or []
    food = nhm_val(d.get('food'))
    teeth = nhm_val(d.get('teeth'))
    locomotion = nhm_val(d.get('locomotion'))
    description = d.get('description', '')
    facts = d.get('facts') or []
    pronunciation = d.get('pronunciation', '')
    source_url = d.get('sourceUrl') or f'{SOURCE_BASE}{d["id"]}.html'

    # PBDB
    attribution = pbdb.get('attribution', '') if pbdb else ''
    family = pbdb.get('family', '') if pbdb else ''
    formations = pbdb.get('formations', []) if pbdb else []
    countries = [COUNTRY_NAMES.get(c, c) for c in (pbdb.get('countries') or [])] if pbdb else []
    early_int = pbdb.get('earlyInterval', '') if pbdb else ''
    late_int = pbdb.get('lateInterval', '') if pbdb else ''
    first_ma = pbdb.get('firstAppearanceMa') if pbdb else None
    last_ma = pbdb.get('lastAppearanceMa') if pbdb else None
    pbdb_id = (pbdb.get('taxonId') or '').replace('txn:', '') if pbdb else ''

    # Wiki
    wiki_extract = wiki.get('extract', '') if wiki else ''
    wiki_url = wiki.get('url', '') if wiki else ''

    # Format facts list
    facts_str = '\n'.join(f'- {f}' for f in facts) if facts else '(none)'
    countries_str = ', '.join(countries) if countries else ', '.join(found) if found else 'unknown'
    formations_str = ', '.join(formations[:4]) if formations else '(unknown)'
    size_str = f'{length} m long' if length else 'length uncertain'
    if mass_kg:
        size_str += f', ~{mass_kg:,} kg'
    age_str = mya or (f'{first_ma}–{last_ma} Ma' if first_ma and last_ma else period)

    prompt = f"""You are a scientific editor writing dinosaur encyclopedia entries for a wiki.

Write a JSON profile for **{name}** (*{latin}*) in the exact schema below.
Base everything on the source data provided. Use confident, specific, encyclopedic prose — avoid vague hedging like "little is known", but do flag genuine uncertainty (e.g. "debated", "estimated", "provisional") when the science is genuinely unsettled. Do not invent specimen numbers or catalog IDs.

## Available source data

**NHM data**
- Name meaning: {meaning or '(not listed)'}
- Type: {type_} | Clade: {clade} > {subclade}
- Diet: {diet} | Locomotion: {locomotion or '(not listed)'}
- Size: {size_str}
- Period: {period} ({age_str})
- Found in: {countries_str}
- Food: {food or '(not listed)'}
- Teeth/feeding: {teeth or '(not listed)'}
- NHM description: {description}
- NHM facts:
{facts_str}

**PBDB data**
- Taxonomic attribution: {attribution}
- Family/group: {family}
- Geological intervals: {early_int} to {late_int}
- Formations: {formations_str}

**Wikipedia extract**
{wiki_extract or '(no Wikipedia extract available)'}

## Output schema (strict JSON, no markdown fences)

{{
  "overview": [
    "First paragraph — introduce the animal: what it was, when and where it lived, its size and significance. 3–4 sentences.",
    "Second paragraph — what makes it notable scientifically or paleontologically: its ecology, behaviour, anatomy, discovery history, or place in the tree of life. 3–4 sentences."
  ],
  "fossilSites": [
    {{
      "name": "Formation name or site name",
      "region": "State/province, Country",
      "lat": 00.0,
      "lon": 00.0,
      "note": "One sentence on what material was found here and why it matters."
    }}
  ],
  "focusedClade": {{
    "trunk": ["Dinosauria", "...", "{name}"],
    "sideBranches": [
      {{"from": "NodeName", "label": "Related group or genus"}}
    ]
  }},
  "articles": [
    {{"title": "Short section title", "body": "2–4 sentences of substantive content."}},
    {{"title": "...", "body": "..."}},
    {{"title": "...", "body": "..."}}
  ],
  "citations": [
    {{"label": "NHM: {name} profile", "url": "{source_url}"}}{f', {{"label": "Wikipedia: {name}", "url": "{wiki_url}"}}' if wiki_url else ''}{f', {{"label": "PBDB: {name}", "url": "https://paleobiodb.org/navigator/?taxon_id={pbdb_id}"}}' if pbdb_id else ''}
  ]
}}

## Rules
- `overview`: exactly 2 strings
- `fossilSites`: 2–4 entries with real approximate coordinates (lat/lon as numbers)
- `focusedClade.trunk`: full path from "Dinosauria" down to "{name}" — use correct intermediate nodes (e.g. Saurischia, Theropoda, family name). Use your knowledge of dinosaur taxonomy.
- `focusedClade.sideBranches`: 2–4 related groups or genera branching off nodes in the trunk, to give the tree context
- `articles`: 3–4 sections — typical titles include Discovery and naming, Anatomy, Ecology, Locomotion, Paleoenvironment, Significance, Diet. Always include one section on discovery/naming.
- All text must be factually grounded in the source data above or well-established paleontology. Do not make up formation names or specimen details.
- Return ONLY the JSON object — no prose, no markdown, no explanation."""

    return prompt


# ── API call ──────────────────────────────────────────────────────────────────

def generate_profile(client, genus_id, d, pbdb, wiki, retries=3):
    prompt = build_prompt(d, pbdb, wiki)
    for attempt in range(retries):
        try:
            msg = client.messages.create(
                model='claude-haiku-4-5-20251001',
                max_tokens=2048,
                messages=[{'role': 'user', 'content': prompt}]
            )
            text = msg.content[0].text.strip()
            # Strip any accidental markdown fences
            text = re.sub(r'^```(?:json)?\s*', '', text)
            text = re.sub(r'\s*```$', '', text)
            profile = json.loads(text)
            # Basic validation
            assert isinstance(profile.get('overview'), list) and len(profile['overview']) == 2
            assert isinstance(profile.get('articles'), list) and len(profile['articles']) >= 2
            assert isinstance(profile.get('fossilSites'), list) and len(profile['fossilSites']) >= 1
            return profile
        except (json.JSONDecodeError, AssertionError, KeyError) as e:
            print(f'  [attempt {attempt+1}] parse/validation error for {genus_id}: {e}')
            if attempt < retries - 1:
                time.sleep(2)
        except anthropic.RateLimitError:
            wait = 30 * (attempt + 1)
            print(f'  rate limit — waiting {wait}s')
            time.sleep(wait)
        except Exception as e:
            print(f'  unexpected error for {genus_id}: {e}')
            if attempt < retries - 1:
                time.sleep(5)
    return None


# ── Output ────────────────────────────────────────────────────────────────────

def write_js(profiles):
    lines = [
        '// Generated by tools/generate_ai_profiles.py. Do not edit manually.',
        '// AI-generated rich profiles for NHM-imported genera.',
        '// Loaded by index.html and merged into RICH_CONTENT for genera',
        '// that do not yet have a hand-curated profile.',
        f'// Generated: {time.strftime("%Y-%m-%d")} | {len(profiles)} genera',
        f'window.AI_ENRICHED_PROFILES = {json.dumps(profiles, indent=2, ensure_ascii=False)};',
        ''
    ]
    OUT_FILE.write_text('\n'.join(lines), encoding='utf-8')
    print(f'\nWrote {OUT_FILE} ({len(profiles)} profiles)')


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description='Generate AI rich profiles for NHM dinosaur genera')
    parser.add_argument('--limit', type=int, default=None, help='Process at most N genera (for testing)')
    parser.add_argument('--genus', nargs='+', help='Process only these genus IDs')
    parser.add_argument('--force', action='store_true', help='Re-generate even if already in progress file')
    args = parser.parse_args()

    api_key = os.environ.get('ANTHROPIC_API_KEY')
    if not api_key:
        print('ERROR: ANTHROPIC_API_KEY environment variable not set.')
        print('Run: export ANTHROPIC_API_KEY="sk-ant-..."')
        sys.exit(1)

    print('Loading data files...')
    nhm = load_nhm_records(ROOT / 'data' / 'nhm-imported-dinosaurs.js')
    pbdb = load_pbdb(ROOT / 'data' / 'pbdb-enrichment.js')
    wiki = load_wiki(ROOT / 'data' / 'wiki-enrichment.js')
    curated = load_curated_ids(ROOT / 'index.html')

    # Load existing progress (resume support)
    profiles = {}
    if PROGRESS_FILE.exists() and not args.force:
        profiles = json.loads(PROGRESS_FILE.read_text())
        print(f'Resuming: {len(profiles)} already generated')

    # Determine which genera to process
    if args.genus:
        targets = [g for g in args.genus if g in nhm]
        unknown = [g for g in args.genus if g not in nhm]
        if unknown:
            print(f'Warning: not found in NHM data: {unknown}')
    else:
        targets = [g for g in nhm if g not in curated]

    if not args.force:
        targets = [g for g in targets if g not in profiles]

    if args.limit:
        targets = targets[:args.limit]

    print(f'{len(targets)} genera to generate')
    if not targets:
        print('Nothing to do.')
        write_js(profiles)
        return

    client = anthropic.Anthropic(api_key=api_key)

    for i, genus_id in enumerate(targets, 1):
        d = nhm[genus_id]
        p = pbdb.get(genus_id)
        w = wiki.get(genus_id)
        print(f'[{i}/{len(targets)}] {d["name"]}...', end=' ', flush=True)

        profile = generate_profile(client, genus_id, d, p, w)
        if profile:
            profiles[genus_id] = profile
            print('ok')
        else:
            print('FAILED — skipped')

        # Save progress after every genus
        PROGRESS_FILE.write_text(json.dumps(profiles, indent=2, ensure_ascii=False))

        # Small delay to avoid hammering the API
        if i < len(targets):
            time.sleep(0.3)

    write_js(profiles)
    print(f'\nDone. {len(profiles)} profiles total.')


if __name__ == '__main__':
    main()
