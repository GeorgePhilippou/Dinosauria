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
