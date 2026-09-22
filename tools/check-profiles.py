#!/usr/bin/env python3
"""Check data/profiles/*.md against the house style in data/profiles/README.md.

Usage:
  python3 tools/check-profiles.py                 # every profile
  python3 tools/check-profiles.py kotasaurus ...  # named profiles only

Exits non-zero if any ERROR is found. WARN lines are advisory.
Requires PyYAML.
"""
import glob, os, re, sys
import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIR = os.path.join(ROOT, 'data', 'profiles')
IDS = {os.path.basename(f)[:-3] for f in glob.glob(os.path.join(DIR, '*.md')) if not os.path.basename(f).startswith(('_', 'README'))}
SECTIONS = ['Overview', 'Anatomy & life', 'Fossil record', 'Where it lived', 'Classification', 'Open questions']
REQUIRED = ['name', 'species', 'period', 'diet', 'found_in', 'classification', 'summary', 'sources', 'reviewed', 'tier']
BANNED_HOSTS = ('researchgate.net', 'academia.edu')
JARGON = ('source-reported', 'not curated', 'band recorded', 'naming details missing', 'catalogue range', 'is cleared')
AMERICAN = {r'\barmor': 'armour', r'\bmeters?\b': 'metre(s)', r'\bpaleontolog': 'palaeontolog', r'\bcolor': 'colour',
            r'\bcenter': 'centre', r'\bfavor': 'favour', r'\bbehavior': 'behaviour', r'\bfossilized': 'fossilised'}


def check(pid):
    errors, warns = [], []
    text = open(os.path.join(DIR, pid + '.md'), encoding='utf-8').read()
    m = re.match(r'^---\n(.*?)\n---\n(.*)$', text, re.S)
    if not m:
        return [f'no front matter'], []
    try:
        f = yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError as e:
        return [f'front matter is not valid YAML: {e}'], []
    body = m.group(2)
    headings = re.findall(r'^## (.+)$', body, re.M)

    for k in REQUIRED:
        if not f.get(k):
            errors.append(f'missing {k}')
    for h in headings:
        if h not in SECTIONS:
            errors.append(f'unknown section "## {h}"')
    if [h for h in SECTIONS if h in headings] != [h for h in headings if h in SECTIONS]:
        errors.append('sections out of order')
    for r in f.get('related') or []:
        if r.get('id') not in IDS:
            errors.append(f'related id "{r.get("id")}" has no profile')
    for s in f.get('sources') or []:
        url = s.get('url', '')
        if any(h in url for h in BANNED_HOSTS):
            errors.append(f'banned source host: {url}')
        if s.get('doi') and not re.match(r'^10\.\d{4,9}/\S+$', str(s['doi'])):
            errors.append(f'malformed DOI: {s["doi"]}')
    if f.get('fossil_record') not in (None, 1, 2, 3, 4):
        errors.append('fossil_record must be 1–4 or null')
    if f.get('fossil_record') is None and f.get('specialist_review') != 'pending':
        warns.append('fossil_record is null but specialist_review is not pending')

    # Prose must not contradict the age in the facts.
    age = f.get('age_ma')
    if isinstance(age, list) and len(age) == 2:
        for a, b in re.findall(r'(\d{2,3}(?:\.\d)?)\s*[–-]\s*(\d{2,3}(?:\.\d)?)\s*million years', body):
            hi, lo = max(float(a), float(b)), min(float(a), float(b))
            if hi < age[1] - 1.5 or lo > age[0] + 1.5:
                errors.append(f'prose age {a}–{b} Ma contradicts age_ma {age}')

    low = body.lower()
    for j in JARGON:
        if j in low:
            errors.append(f'internal review wording in prose: "{j}"')
    if '%' in body:
        warns.append('use "per cent", not %')
    for pat, fix in AMERICAN.items():
        if re.search(pat, body, re.I):
            warns.append(f'American spelling ({pat.strip(chr(92) + "b")}) — use {fix}')

    if f.get('tier') in ('revised', 'polished'):
        if not f.get('specimens'):
            warns.append('no specimens listed')
        if not any('doi' in s for s in f.get('sources') or []):
            warns.append('no DOI source')
        for h in SECTIONS[:-1]:
            if h not in headings:
                warns.append(f'missing section "## {h}"')
    if 'parked' in f and f.get('tier') in ('revised', 'polished'):
        warns.append('parked text still present')
    return errors, warns


def main():
    ids = sys.argv[1:] or sorted(IDS)
    n_err = 0
    for pid in ids:
        errors, warns = check(pid)
        for e in errors:
            print(f'ERROR {pid}: {e}')
        for w in warns:
            print(f'WARN  {pid}: {w}')
        n_err += len(errors)
    print(f'{len(ids)} profiles checked, {n_err} errors')
    sys.exit(1 if n_err else 0)


if __name__ == '__main__':
    main()
