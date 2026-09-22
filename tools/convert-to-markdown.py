#!/usr/bin/env python3
"""One-off migration: data/genera/<id>.json (+ legacy rows, IMAGE_FILES) -> data/profiles/<id>.md

Each fact is taken from exactly one source, in priority order, so the Markdown
file states it once. Prose is sorted into the fixed section list. Substantive
text that does not fit a section is parked in `parked:` in the front matter so
nothing is lost; the rewrite pass folds it in and deletes it.

Also writes data/profiles/_conversion-report.md listing contradictions between
the old layers and content gaps, weakest genera first.

Usage: python3 tools/convert-to-markdown.py
"""
import glob, json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'data', 'profiles')
SECTIONS = ['Overview', 'Anatomy & life', 'Fossil record', 'Where it lived', 'Classification', 'Open questions']


def load_js_array(path):
    t = open(path, encoding='utf-8').read()
    return json.loads(t[t.index('['):t.rindex(']') + 1])


def load_image_files():
    t = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
    block = t[t.index('const IMAGE_FILES = {'):]
    block = block[:block.index('\n};')]
    return {m.group(1): m.group(3) for m in re.finditer(r"^\s*([a-z0-9]+):\s*(['\"])(.*?)\2,?\s*$", block, re.M)}


LEGACY = {r[0]: r for f in ('existing-dinosaurs.js', 'nhm-imported-dinosaurs.js')
          for r in load_js_array(os.path.join(ROOT, 'data', f))}
IMAGE_FILES = load_image_files()
ALL_IDS = {os.path.basename(f)[:-5] for f in glob.glob(os.path.join(ROOT, 'data', 'genera', '*.json'))}


# ---------- small helpers ----------

PLACEHOLDER = re.compile(r'not listed|unknown|n/a|not recorded', re.I)


def first(*vals):
    for v in vals:
        if isinstance(v, str) and PLACEHOLDER.search(v) and len(v) < 40:
            continue
        if v is not None and v != '' and v != [] and v != {}:
            return v
    return None


def norm(s):
    return re.sub(r'[^a-z0-9]+', ' ', (s or '').lower()).strip()


def contained(needle, haystack):
    """True if `needle` adds nothing beyond `haystack` (near-duplicate text)."""
    n, h = norm(needle), norm(haystack)
    if not n:
        return True
    if n in h:
        return True
    words = set(n.split())
    return len(words) > 0 and len(words & set(h.split())) / len(words) > 0.85


def parse_range(text):
    """'about 83-80 million years ago' -> [83, 80]; 'latest Maastrichtian, about 68–66 Ma' -> [68, 66]."""
    if not text:
        return None
    m = re.search(r'(\d+(?:\.\d+)?)\s*(?:[-–—]|to)\s*(\d+(?:\.\d+)?)\s*(?:million|Ma\b|mya)', text)
    if m:
        a, b = float(m.group(1)), float(m.group(2))
        return [num(max(a, b)), num(min(a, b))]
    m = re.search(r'(\d+(?:\.\d+)?)\s*(?:million|Ma\b)', text)
    if m:
        return [num(float(m.group(1)))] * 2
    return None


def num(x):
    return int(x) if float(x).is_integer() else round(float(x), 1)


def doi_of(url):
    m = re.search(r'doi\.org/(.+)$', url or '')
    return m.group(1) if m else None


# ---------- YAML emitter (subset, always valid YAML) ----------

PLAIN = re.compile(r"^[A-Za-z0-9À-ž(][A-Za-z0-9À-ž .,()'’/–\-]*$")


def scalar(v):
    if v is None:
        return 'null'
    if isinstance(v, bool):
        return 'true' if v else 'false'
    if isinstance(v, (int, float)):
        return str(v)
    s = str(v)
    if PLAIN.match(s) and s.lower() not in ('yes', 'no', 'true', 'false', 'null', 'on', 'off') and not s.endswith(' ') \
            and not re.fullmatch(r'[\d.]+', s):
        return s
    return json.dumps(s, ensure_ascii=False)


def emit(key, v, ind=0):
    pad = ' ' * ind
    if isinstance(v, dict):
        lines = [f'{pad}{key}:']
        for k, x in v.items():
            lines += emit(k, x, ind + 2)
        return lines
    if isinstance(v, list):
        if not v:
            return [f'{pad}{key}: []']
        if all(not isinstance(x, (dict, list)) for x in v) and sum(len(str(x)) for x in v) < 90:
            return [f'{pad}{key}: [' + ', '.join(scalar(x) for x in v) + ']']
        lines = [f'{pad}{key}:']
        for x in v:
            if isinstance(x, dict):
                items = list(x.items())
                k0, v0 = items[0]
                lines.append(f'{pad}  - {k0}: {scalar(v0)}')
                for k, y in items[1:]:
                    lines.append(f'{pad}    {k}: {scalar(y)}')
            else:
                lines.append(f'{pad}  - {scalar(x)}')
        return lines
    return [f'{pad}{key}: {scalar(v)}']


# ---------- conversion ----------

def convert(d):
    gid = d['id']
    L = (LEGACY.get(gid) or []) + [None] * 23
    r = d.get('review', {})
    rec = r.get('record', {})
    p = r.get('presentation', {})
    ev = r.get('evidence', {})
    pan = ev.get('panel', {})
    prof = d.get('richProfile') or d.get('profile') or {}
    fr = d.get('fossilRecord', {})
    qf = {f['label'].lower(): f['value'] for f in p.get('quickFacts', [])}
    issues, parked = [], []

    # --- facts (one source each) ---
    age_text = first(rec.get('mya'), L[6])
    age_ma = parse_range(age_text)
    length = rec['length'] if 'length' in rec else L[11]
    mass = rec['massKg'] if 'massKg' in rec else L[12]
    level = (pan.get('coverage') or {}).get('level')
    if level is None:
        s = ev.get('score') or 0
        level = 4 if s >= 90 else 3 if s >= 70 else 2 if s >= 50 else 1

    image = None
    if p.get('heroMedia'):
        h = p['heroMedia']
        image = {'file': h['file'], 'alt': h.get('alt'), 'caption': h.get('caption'), 'credit': h.get('credit')}
    elif d.get('remainsImage'):
        image = {'file': d['remainsImage']['file'], 'alt': d['remainsImage'].get('label'), 'credit': None}
    elif gid in IMAGE_FILES:
        image = {'file': IMAGE_FILES[gid].replace('_', ' '), 'alt': None, 'credit': None}

    specimens = []
    for s in pan.get('specimenCards', []):
        specimens.append({'id': s['title'].split(' · ')[0], 'label': ' · '.join(s['title'].split(' · ')[1:]) or s.get('kicker'),
                          'where': s.get('meta'), 'note': s.get('description')})
    if not specimens:
        for s in ev.get('specimens', []):
            specimens.append({'id': s.get('id'), 'label': s.get('name'), 'where': s.get('institution'), 'note': s.get('note')})

    sites = []
    for s in prof.get('fossilSites', []):
        sites.append({'name': s['name'], 'region': s.get('region'), 'lat': s.get('lat'), 'lon': s.get('lon'), 'note': s.get('note')})
    if p.get('locality'):
        loc = p['locality']
        if not any(norm(loc['name']) in norm(s['name']) or norm(s['name']) in norm(loc['name']) for s in sites):
            sites.insert(0, {'name': loc['name'], 'region': loc.get('region'), 'lat': None, 'lon': None, 'note': loc.get('note')})
        else:
            for s in sites:
                if norm(loc['name']) in norm(s['name']) or norm(s['name']) in norm(loc['name']):
                    s['note'] = loc.get('note') or s['note']
                    s['type_locality'] = True

    sources, seen = [], set()

    def add_src(cite, url, kind=None):
        key = doi_of(url) or url or norm(cite)
        if not cite or key in seen:
            return
        seen.add(key)
        entry = {'cite': cite}
        if doi_of(url):
            entry['doi'] = doi_of(url)
        elif url:
            entry['url'] = url
        sources.append(entry)

    for s in r.get('sources', []):
        add_src(s['citation'], s.get('url'))
    for s in pan.get('resources', []):
        add_src(s['title'] + (' — ' + s['description'] if s.get('description') else ''), s.get('url'))
    for s in prof.get('citations', []):
        add_src(s['label'], s.get('url'))
    if L[20] and L[20] not in seen:
        add_src('Natural History Museum Dino Directory', L[20])

    related = [{'id': x['id'], 'why': x.get('reason')} for x in p.get('related', []) if x['id'] in ALL_IDS]
    for x in p.get('related', []):
        if x['id'] not in ALL_IDS:
            issues.append(f"related genus `{x['id']}` is not in the dataset (dropped)")

    trunk = first(rec.get('taxonomy'), (prof.get('focusedClade') or {}).get('trunk'), [])
    if trunk and trunk[-1] == d['name']:
        trunk = trunk[:-1]

    diet = first(qf.get('diet'), rec.get('diet'), L[9])
    fm = {
        'name': d['name'],
        'species': L[2],
        'meaning': L[3],
        'pronunciation': L[19],
        'status': first(rec.get('taxonomicStatus'), 'valid'),
        'period': rec.get('period') or L[5],
        'age_ma': age_ma,
        'age_note': age_text if age_text and not re.fullmatch(r'(about )?[\d.]+[-–][\d.]+ million years ago', age_text) else None,
        'length_m': length,
        'mass_kg': mass,
        'size_note': qf.get('known size'),
        'diet': diet,
        'posture': first(rec.get('locomotion'), L[10]),
        'found_in': L[13] or [],
        'fossil_record': level,
        'fossil_record_note': first((pan.get('coverage') or {}).get('basis'), ev.get('confidenceLimit')),
        'classification': trunk,
        'related': related,
        'summary': first(p.get('heroLead'), rec.get('description')),
        'image': image,
        'specimens': specimens,
        'sites': sites,
        'formations': fr.get('formations'),
        'sources': sources,
        'reviewed': r.get('reviewedOn'),
        'tier': 'polished' if p else ('drafted' if prof.get('provenance') == 'ai-drafted' else 'basic'),
    }
    if fm['acceptedName' if False else 'status'] == 'valid' and rec.get('acceptedName'):
        fm['accepted_name'] = rec['acceptedName']

    # --- prose sections ---
    arts = prof.get('articles', [])
    is_fossil = lambda a: re.search(r'discover|fossil|specimen|naming|named|history', a['title'], re.I)
    is_where = lambda a: re.search(r'habitat|environment|ecosystem|palaeo|paleo|world|where', a['title'], re.I)
    is_class = lambda a: re.search(r'classif|relationship|phylog|evolution|family|taxonom', a['title'], re.I)
    body = {k: [] for k in SECTIONS}

    body['Overview'] = list(prof.get('overview', []))

    if p:
        body['Anatomy & life'] += p.get('animalParagraphs', [])
        body['Anatomy & life'] += ['- ' + h for h in p.get('animalHighlights', [])]
        for c in p.get('lifeCards', []):
            if re.search(r'size|length|mass', c['label'], re.I):
                continue
            body['Anatomy & life'].append(f"**{c['label']}: {c['value']}.** {c.get('reason', '')}".strip())
        for x in [pan.get('standfirst'), (pan.get('knownRemains') or {}).get('summary'), (pan.get('knownRemains') or {}).get('note')]:
            if x:
                body['Fossil record'].append(x)
        if p.get('classificationSummary'):
            body['Classification'].append(p['classificationSummary'])
        for q in p.get('questions', []):
            body['Open questions'].append(f"### {q['title']}\n\n{q['copy']}")
        for a in arts:  # polished genera: keep old articles only if they add something
            parked.append({'from': 'article: ' + a['title'], 'text': a['body']})
    else:
        for a in arts:
            target = 'Fossil record' if is_fossil(a) else 'Where it lived' if is_where(a) else \
                'Classification' if is_class(a) else 'Anatomy & life'
            body[target].append(a['body'])
        for q in r.get('residualUncertainty', []):
            body['Open questions'].append('- ' + q)

    def add_if_new(section, text):
        if text and not any(contained(text, t) for s in SECTIONS for t in body[s]):
            body[section].append(text)

    add_if_new('Fossil record', ev.get('material') if not p else None)
    add_if_new('Fossil record', fr.get('evidence'))
    add_if_new('Where it lived', fr.get('paleo'))
    for f in rec.get('facts', []):
        if not any(contained(f, t) for s in SECTIONS for t in body[s]):
            parked.append({'from': 'record fact', 'text': f})
    if r.get('ageReviewNote'):
        parked.append({'from': 'age review note', 'text': r['ageReviewNote']})

    fm['parked'] = parked

    # --- checks ---
    alltext = ' '.join(t for s in SECTIONS for t in body[s])
    if age_ma:
        for m in re.finditer(r'(?:approximately |about |roughly |some )?(\d{2,3}(?:\.\d)?)\s*[-–]\s*(\d{2,3}(?:\.\d)?)\s*million years', alltext):
            a, b = sorted([float(m.group(1)), float(m.group(2))], reverse=True)
            if age_ma[0] == age_ma[1]:
                bad = not (b - 1 <= age_ma[0] <= a + 1)
            else:
                overlap = min(a, age_ma[0]) - max(b, age_ma[1])
                bad = overlap < 0.3 * max(1, min(a - b, age_ma[0] - age_ma[1]))
            if bad:
                issues.append(f"age: facts say {age_ma[0]}–{age_ma[1]} Ma but prose says “{m.group(0)}”")
    else:
        issues.append('age: no parseable age range')
    lens = [float(x) for x in re.findall(r'(\d+(?:\.\d+)?)\s*(?:metres|meters|m)\b(?! ?(?:million|years))', ' '.join(body['Overview']))]
    if length and lens and all(abs(x - length) / length > 0.35 for x in lens):
        issues.append(f"length: facts say {length} m but overview mentions {', '.join(map(str, lens))} m")
    if isinstance(L[11], (int, float)) and length and abs(L[11] - length) / length > 0.35:
        issues.append(f"length: reviewed {length} m vs old catalogue {L[11]} m")
    if L[9] and diet and norm(L[9]).split()[0] not in norm(diet).split():
        issues.append(f"diet: {diet} vs old catalogue {L[9]}")

    issues = list(dict.fromkeys(issues))
    gaps = []
    if not image: gaps.append('no image')
    if not specimens: gaps.append('no specimens')
    if not any('doi' in s for s in sources): gaps.append('no DOI source')
    for s in SECTIONS:
        if not body[s] and s != 'Open questions':
            gaps.append(f'empty: {s}')
    if len(' '.join(body['Overview'])) < 400: gaps.append('short overview')
    if fm['tier'] != 'polished': gaps.append(f"tier: {fm['tier']}")

    # --- write ---
    lines = ['---']
    for k, v in fm.items():
        if v is None or v == [] or v == {}:
            if k in ('length_m', 'mass_kg'):
                lines.append(f'{k}: null')
            continue
        if isinstance(v, dict):
            v = {a: b for a, b in v.items() if b is not None}
        lines += emit(k, v)
    lines.append('---')
    for s in SECTIONS:
        if body[s]:
            lines += ['', f'## {s}', '']
            prev_bullet = False
            for t in body[s]:
                bullet = t.startswith('- ')
                if lines[-1] != '' and not (bullet and prev_bullet):
                    lines.append('')
                lines.append(t.strip())
                prev_bullet = bullet
    open(os.path.join(OUT, gid + '.md'), 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
    return {'id': gid, 'name': d['name'], 'issues': issues, 'gaps': gaps, 'tier': fm['tier'],
            'chars': len(alltext), 'parked': len(parked)}


def main():
    os.makedirs(OUT, exist_ok=True)
    results = [convert(json.load(open(f, encoding='utf-8'))) for f in sorted(glob.glob(os.path.join(ROOT, 'data', 'genera', '*.json')))]
    results.sort(key=lambda x: (-len(x['gaps']) - 2 * len(x['issues']), x['chars']))
    n_issue = sum(1 for x in results if x['issues'])
    rep = ['# Conversion report', '',
           f'{len(results)} genera converted. {n_issue} have contradictions between the old data layers. '
           'Weakest first (score = gaps + 2 × contradictions).', '',
           '| Genus | Tier | Prose chars | Parked | Contradictions | Gaps |', '|---|---|---|---|---|---|']
    for x in results:
        rep.append(f"| {x['name']} | {x['tier']} | {x['chars']} | {x['parked']} | {'<br>'.join(x['issues']) or '—'} | {', '.join(x['gaps']) or '—'} |")
    open(os.path.join(OUT, '_conversion-report.md'), 'w', encoding='utf-8').write('\n'.join(rep) + '\n')
    print(f'{len(results)} files written; {n_issue} with contradictions')


if __name__ == '__main__':
    main()
