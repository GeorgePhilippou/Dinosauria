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
| [WorldMap-A_non-Frame.png, Wikimedia Commons, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:WorldMap-A_non-Frame.png) | Base map for fossil-locality maps (bundled in `assets/maps/`) |

---

## Usage

No build step and no dependencies. Genus content is fetched per file at runtime, so the site must be served over HTTP (GitHub Pages does this; opening `index.html` directly from `file://` will not load profiles).

1. Clone or download the repository
2. Run a local server and open it:
   ```bash
   python3 -m http.server 8080
   ```
   Then open `http://localhost:8080` in your browser.

### Editing a dinosaur

Every genus has its own file in [`data/genera/`](data/genera/) — for example [`data/genera/tyrannosaurus.json`](data/genera/tyrannosaurus.json). Edit it (on GitHub, the pencil icon on the file page) and the change is live on the next load. [`data/genera/README.md`](data/genera/README.md) documents the fields. Edits to the reviewed `record` fields are picked up by the catalogue grid after the `genera-index` GitHub Action rebuilds `data/genera-index.js`, which it does automatically on push. The site also installs a service worker for offline use, which serves the copy it has and refreshes in the background — so after an edit, reload twice (or hard-refresh) to see it.

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

---

## Project Structure

```
├── index.html                  # Main application
├── data/
│   ├── genera/                 # One JSON file per genus: prose, evidence, review, presentation
│   ├── genera-index.js         # Generated extract of review record fields for the catalogue grid
│   ├── existing-dinosaurs.js   # 100 original catalogue records
│   ├── nhm-imported-dinosaurs.js  # 228 NHM-imported catalogue records
│   ├── pbdb-enrichment.js      # PBDB occurrence/taxonomy context
│   ├── wiki-enrichment.js      # Wikipedia-derived context
│   └── legacy/                 # Frozen pre-restructure bundles (not loaded by index.html)
├── .github/workflows/genera-index.yml  # Validates genus files and rebuilds the index on push
├── tools/                      # build-genera-index, validate-genera, plus older audit scripts
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
