# Dinosauria

An open-access scientific reference wiki for 328 non-avian dinosaur genera, spanning the full range of the Mesozoic Era (252–66 Ma). Built on data from the Natural History Museum London's Dinosaur Directory and peer-reviewed literature.

![Dinosauria Wiki](dinosaur_design_wiki_header.png)

---

## Features

- **Catalogue** — browse and filter all 328 genera by geological period, diet, body type and fossil location
- **Species profiles** — length, mass, diet, movement, fossil record, classification, paleogeographic map and field notes for each genus
- **Family tree** — collapsible phylogenetic cladogram with scientifically accurate placement across Saurischia and Ornithischia
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
| [International Geological Time Scale (IUGS)](https://stratigraphy.org/ICSchart/ChronostratChart2024-12.pdf) | Period and stage ages |
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

This runs data validation, fact-check scanning, content-audit generation, and browser smoke tests. If your environment cannot bind a local browser test server, run the non-browser checks only:

```bash
node tools/run-audit.mjs --skip-smoke
```

Rank profiles by content completeness and generate an improvement queue directly:

```bash
node tools/content-audit.mjs --out=content-audit.md --top=50
```

Generate profile content overrides for imported entries that do not yet have hand-written rich content:

```bash
node tools/generate-content-overrides.mjs
```

---

## Project Structure

```
├── index.html                  # Main application
├── data/
│   ├── existing-dinosaurs.js   # 67 fully curated genera with rich profiles
│   ├── nhm-imported-dinosaurs.js  # 261 NHM-imported genera
│   └── pbdb-enrichment.js      # PBDB occurrence/taxonomy enrichment
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
