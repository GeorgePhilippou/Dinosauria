# Dinosauria

An open-access scientific reference wiki with 328 dinosaur and early-avialan catalogue profiles. The collection is principally non-avian dinosaurs, with a small number of early avialans and explicitly labelled disputed or historical names, sampled from the Late Triassic to the end of the Cretaceous (about 237–66 Ma). It combines the Natural History Museum London's Dino Directory, occurrence context from the Paleobiology Database, and taxon-specific scientific literature.

![Dinosauria Wiki](dinosaur_design_wiki_header.png)

---

## Features

- **Catalogue** — browse and filter all 328 profiles by geological period, diet, body type and fossil location
- **Taxon profiles** — reviewed age, material, classification, uncertainty, source links and retained biological estimates
- **Family tree** — collapsible, editorially curated phylogenetic overview across Saurischia and Ornithischia
- **World map** — fossil locality distribution plotted across 30+ countries
- **Timeline** — geological period and stage explorer with paleogeographic reconstructions and climate context
- **Collection overview** — statistics on diversity, geography, size distribution, and collection records (longest, heaviest, most widespread, and more)
- **Dark / light mode** — automatic system preference detection with manual override

---

## Data Sources

| Source | Usage |
|---|---|
| [NHM London Dinosaur Directory](https://www.nhm.ac.uk/discover/dino-directory.html) | Species data, taxonomy, fossil records |
| [Paleobiology Database](https://paleobiodb.org/classic) | Occurrence counts, formation-level records, stratigraphic ranges and taxonomy enrichment |
| Taxon-specific primary and systematic literature | Taxonomy, fossil material, age, anatomy and active scientific disagreements |
| [International Chronostratigraphic Chart, June 2026](https://stratigraphy.org/ICSchart/ChronostratChart2026-06.pdf) | Period and stage boundaries |
| [Wikimedia Commons](https://commons.wikimedia.org) | Reference images (individual Creative Commons licences — see each file page) |
| [PALEOMAP Project — Scotese et al., CC BY 4.0](https://www.earthbyte.org/paleomap-paleoatlas-for-gplates/) | Paleogeographic maps |

---

## Usage

No build step, no dependencies, no server required.

1. Clone or download the repository
2. Open `index.html` in any modern browser

> **Note:** Some browsers (Chrome) restrict loading local files from `file://`. If images or data don't load, run a simple local server:
> ```bash
> python3 -m http.server 8080
> ```
> Then open `http://localhost:8080` in your browser.

### Shareable links

Main views and species profiles can be opened directly with URL hashes:

- `#catalog`
- `#timeline`
- `#map`
- `#clado`
- `#glossary` (Field Guide)
- `#dino/tyrannosaurus`

## Smoke Tests

Run the browser smoke tests with Node.js:

```bash
node tools/smoke-test.mjs
```

Or, if you use npm:

```bash
npm test
```

In Codex Desktop, if `node` is not on your shell path, use the bundled runtime:

```bash
/Users/georgephilippou/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node tools/smoke-test.mjs
```

The smoke test will use a local Playwright install when available, fall back to the Codex Desktop bundled Playwright package, and use `PLAYWRIGHT_EXECUTABLE_PATH` if you need to point it at a specific Chromium/Chrome executable.

## Content Audit

Run the full local audit suite:

```bash
node tools/run-audit.mjs
```

This runs scientific-review consistency checks, data validation, fact-check scanning, content-audit generation, and browser smoke tests. If your environment cannot bind a local browser test server, run the non-browser checks only:

```bash
node tools/run-audit.mjs --skip-smoke
```

Rank profiles by content completeness and generate an improvement queue directly:

```bash
node tools/content-audit.mjs --out=content-audit.md --top=50
```

Validate the review coverage, check DOI citations against registry metadata, and regenerate the public review ledger:

```bash
node tools/validate-scientific-reviews.mjs
node tools/validate-review-sources.mjs
node tools/scientific-review-ledger.mjs
```

The DOI check requires an internet connection. A profile is not marked fully reviewed merely because it exists in the source catalogues: the review layer records its literature trail and any residual uncertainty. Particularly fragmentary or taxonomically unstable entries remain visibly queued for specialist confirmation.

Once a genus's structured record (age, mass, diet, etc.) has been through review, its older curated or AI-drafted narrative paragraphs are only shown if they don't contradict that record. Re-check narrative text against the record and regenerate the allow-list after editing any profile's write-up:

```bash
node tools/narrative-consistency-check.mjs --out=data/narrative-review-queue.md
```

This is an internal-consistency check against data already in the repository, not a substitute for a primary-literature review — an AI-drafted profile that passes still carries its "AI-drafted text" pill.

---

## Project Structure

```
├── index.html                  # Main application
├── data/
│   ├── existing-dinosaurs.js   # 100 original catalogue records
│   ├── nhm-imported-dinosaurs.js  # 228 NHM-imported catalogue records
│   ├── pbdb-enrichment.js      # PBDB occurrence/taxonomy context
│   ├── scientific-reviews.js   # Individually authored core reviews
│   ├── scientific-baseline-audit.js # Conservative safety fallback
│   └── review-batches/         # Catalogue-wide taxon-specific reviews
├── tools/                      # Scientific, source, data and browser checks
├── SCIENTIFIC-REVIEW.md        # Generated review ledger
├── dinosaur_design_wiki_header.png
└── Dinosaur_Wiki_Logo.png
```

---

## Licence

This project is licensed under [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/).

You are free to share and adapt this work for non-commercial purposes, provided you give appropriate credit.

Species data sourced from the NHM London Dinosaur Directory is subject to [NHM's terms of use](https://www.nhm.ac.uk/about-us/website-terms-of-conditions.html).

---

*Built by George Philippou*
