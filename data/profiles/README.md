# Genus profiles (Markdown)

One Markdown file per genus, named by catalogue id (`triceratops.md`). This is
the **single source of truth** for a profile page: every fact is stated once,
here, and the page layout reads it. Edit the file in any text editor or on
GitHub (pencil icon → edit → commit).

> Status (22 Sep 2026): generated from the old `data/genera/*.json` by
> `tools/convert-to-markdown.py`. The live site still reads the JSON until the
> new page layout is built; after that the JSON files are retired.
> `_conversion-report.md` lists contradictions and gaps, weakest genus first.

## File shape

```markdown
---
name: Kotasaurus
species: Kotasaurus yamanpalliensis
meaning: Kota lizard
pronunciation: koht-a-sore-us
status: valid                # valid | synonym | dubious | contested
period: Early Jurassic
age_ma: [183, 174]           # older, younger — shown as "183–174 million years ago"
age_note: probably Toarcian  # optional stage / caveat, shown small
length_m: 9                  # null = deliberately not estimated (e.g. skull-only taxa)
mass_kg: null
size_note: "about 8–9 m · 6–10 t"   # optional, overrides the size shown when a range reads better
diet: Herbivore
posture: Quadrupedal
found_in: [India]
fossil_record: 2             # 1 fragmentary · 2 partial · 3 good · 4 excellent
fossil_record_note: one sentence on why
classification: [Dinosauria, Saurischia, Sauropodomorpha, Sauropoda]
related:
  - id: barapasaurus         # must be another file in this folder
    why: one line
summary: One or two sentences shown under the name.
image:
  file: Commons filename.jpg # verified licence
  alt: …
  credit: "Author · CC BY-SA 4.0"
specimens:
  - id: YPM 1820
    label: holotype
    where: "Wyoming · Lance Formation · Yale Peabody Museum"
    note: one or two sentences
sites:
  - name: Hell Creek Formation
    region: Montana, USA
    lat: 46.8
    lon: -104.2
    note: …
formations: free text
sources:
  - cite: "Author (year), Title"
    doi: 10.xxxx/…           # preferred; otherwise url:
reviewed: 2026-09-22
tier: polished               # polished | drafted | basic — raise when a page meets this guide
parked:                      # text from the old data not yet placed; fold in and delete
  - from: record fact
    text: …
---

## Overview
## Anatomy & life
## Fossil record
## Where it lived
## Classification
## Open questions      (only when a real debate exists; use ### per question)
```

## House style

- **Each fact once.** Age, size, diet, place and the fossil-record rating live
  in the front matter; the prose must not restate them as numbers. If prose
  needs an age, it must match `age_ma`.
- **Target depth (a "polished" page):** Overview 2 paragraphs; Anatomy & life
  2–3 paragraphs plus up to 3 bullet highlights; Fossil record 1–2 paragraphs
  plus at least one specimen with catalogue number; Where it lived 1 paragraph;
  Classification 1 paragraph plus 2–3 related genera; 3+ sources, at least one
  with a DOI.
- **Fragmentary taxa:** say plainly what is and is not known, once, in Fossil
  record. Do not scatter caveats through every section, and do not invent size
  or anatomy — leave `length_m: null`.
- Encyclopaedic, confident tone for readers; no internal review language
  ("source-reported", "not curated", "band recorded during review").
- British spelling (palaeontology, armour, metres). Write "per cent", not %.
- Sources: primary literature via DOI (check with `api.crossref.org/works/<doi>`).
  Never ResearchGate or Academia.edu. PBDB links as
  `paleobiodb.org/navigator/?taxon_id=N`.
- Images: Wikimedia Commons only, licence and author verified via the Commons API.
- When you change a page, update `reviewed:` and delete any `parked:` items
  you have used or rejected.
