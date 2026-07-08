# Dinosauria v2 — Changelog & Editorial Report

A rebuilt, self-contained version of the wiki (`index_v2.html`) with a new
interface, new data-visualisations, and a transparent fact-checking layer.
The original `index.html` and all original `data/*.js` files are **untouched**.

---

## 1. What was fact-checked

Every one of the 328 genera was passed through an automated audit
(`tools/factcheck-scan.mjs`) that compares each stored record against its
Paleobiology Database entry, then a manual review of the flagship and
frequently-revised genera against the primary literature.

**Headline finding: the underlying dataset is largely accurate.** The stored
ages, which at first glance disagree with PBDB, are in fact *more* precise: PBDB
reports the broad chronostratigraphic *stage bins* that bracket a genus
(e.g. Tyrannosaurus as "Campanian–Maastrichtian, 83.6–66 Ma"), whereas the
curated records give the tighter, type-species age (68–66 Ma). The audit
confirmed those curated ages should be kept, not "corrected" to the wider PBDB
range. The dataset also correctly *excludes* common non-dinosaurs
(Pteranodon, Quetzalcoatlus, Elasmosaurus, Dimetrodon).

Corrections were therefore made surgically, only where a published
reassessment supersedes the stored value, or where a well-constrained modern
estimate fills a field the NHM Directory leaves blank. All edits live in a
single auditable file, `data/v2-corrections.js`, and are surfaced in the app as
an **"Editor's note"** on each affected profile.

## 2. Corrections applied

| Genus | Field | Old → New | Type | Basis |
|---|---|---|---|---|
| **Dreadnoughtus** | mass | ~65 t → **49 t** | correction | Bates et al. 2015 rebuilt the animal with 3-D convex-hull volumetric modelling, cutting the 2014 limb-allometry estimate to ~48–49 t. |
| **Deinocheirus** | mass, length, stance | none/10 m → **6.4 t, 11 m, bipedal** | gap-fill | For decades known only from its arms; Lee et al. 2014 described two near-complete skeletons. |
| **Spinosaurus** | length | 14 m → **15 m** | correction | Neotype reconstruction, Ibrahim et al. 2014/2020. |
| **Dilophosaurus** | length | 6 m → **7 m** | correction | Marsh & Rowe 2020 full redescription reconstructs a larger animal. |
| **Patagotitan** | mass, length | 57 t/37.5 m → **~55 t, ~34 m** | correction | Early 69 t / very-long figures later tempered; volumetric estimates cluster at ~50–57 t. |
| **Anchiornis** | length, mass | 0.6 m → **0.40 m, ~0.24 kg** | correction | Crow-sized paravian known from many specimens; older figure over-stated size. |
| **Mapusaurus** | mass | none → **~3.3 t** | gap-fill | NHM lists no mass; conservative estimate from the bonebed material (Coria & Currie 2006). |
| **Panoplosaurus** | mass | none → **~1.6 t** | gap-fill | Standard nodosaurid estimate. |
| **Parksosaurus** | mass | none → **~45 kg** | gap-fill | Small neornithischian estimate. |
| **Hagryphus** | period, age | "not listed by NHM" → **Late Cretaceous, 76–74 Ma** | correction | Type material from the radiometrically-dated Kaiparowits Formation (Zanno & Sampson 2005). |

Full rationales and primary-source links for each are embedded in
`data/v2-corrections.js` and shown on the profile pages.

## 3. Gaps filled (content, not just numbers)

- **Content audit as a map.** The 213 "missing mass" and 247 "missing summary"
  flags in `content-audit.md` were addressed structurally: the app now merges
  *all* available enrichment layers (`ai-enriched-profiles`, `ai-fossil-records`,
  `ai-curated-evidence`, `content-overrides`, `wiki-enrichment`) into every
  profile, so previously thin imported genera now show an overview, fossil-record
  panel, evidence-quality score, and sourced citations — content that existed in
  the data files but was surfaced inconsistently before.
- **Evidence-quality panel.** Each profile now renders the curated evidence
  score (0–100) with a plain-language note on *what the fossils can and cannot
  tell us* — an honesty layer aimed squarely at fragmentary genera.
- **Editor's notes** make every v2 change visible in-context rather than hidden.

## 4. Design & architecture decisions

- **New "field-guide / museum vitrine" visual language.** Warm stone-and-ink
  palette with a *sediment-strata* accent system: every period has a fixed
  colour used consistently across the period rail, timeline, cards and profile
  tags, so the same geological cue reads everywhere. Serif display type
  (Iowan/Palatino) over a system sans for body — a printed-reference feel.
- **Zero new dependencies, no build step.** Same philosophy as the original:
  open `index_v2.html` in a browser (via a local static server for `file://`
  image/CORS reasons). All views, the world map, timeline and cladogram are
  hand-rendered SVG/DOM.
- **Clean merge layer.** `app-v2.js` decodes the record arrays into objects,
  layers enrichment by priority (curated → AI → generated), then applies
  `V2_CORRECTIONS`. This keeps the original data files pristine while making
  corrections a single, reviewable diff.
- **Content reuse without touching the original.** `tools/extract-curated.mjs`
  pulls the hand-written `RICH_PROFILES`, `RICH_CONTENT`, `CLADOGRAM_TREE`,
  classification paths, validity notes, country coordinates and period/event
  metadata out of `index.html` into `data/curated-content.js`, so v2 keeps every
  bit of curated writing.
- **New / improved visualisations:**
  - *Timeline* — all 328 genera plotted by period midpoint on a true
    time-axis, coloured by diet, with click-to-isolate periods, deep-time event
    markers and hover tooltips.
  - *World map* — a schematic equirectangular projection with a graticule and
    coarse continent outlines; markers scale with genus count and link straight
    into a filtered catalogue.
  - *Cladogram* — a fully collapsible tree with per-clade leaf counts and
    genus links.
  - *Compare tool* — a persistent bottom bar; pick any two genera for a
    side-by-side stat table with a size-ratio callout.
  - *Size panel* — every profile scales the animal against a 1.75 m human.
- **Preserved conventions:** hash routing (`#catalog`, `#timeline`, `#map`,
  `#clado`, `#glossary`, `#dino/<slug>`, plus a new `#home`), dark/light theme
  with system detection and manual override, global search with keyboard
  navigation, and the full 328-genus scope.

## 5. Files added (originals untouched)

```
index_v2.html                 new application shell + styles
app-v2.js                     new application logic (merge + all views)
data/v2-corrections.js        fact-check corrections & gap-fills
data/curated-content.js       curated content extracted from index.html (generated)
tools/extract-curated.mjs     extractor for the above
tools/validate-data.mjs       loads all layers, reports merged stats
tools/factcheck-scan.mjs      age/mass audit against PBDB
CHANGELOG-v2.md               this file
```

*Sources for corrections are cited inline in `data/v2-corrections.js`.*
