// ── Dinosauria v2 — Fact-check corrections & gap-fills ─────────────────────────
// Authored for index_v2.html. Each entry overrides fields on the base record and
// records a machine-readable rationale that the app surfaces on the profile page
// ("Editor's note") and that CHANGELOG-v2.md documents in full.
//
// Scope note: the underlying NHM/PBDB dataset was found to be largely accurate on
// audit (see CHANGELOG-v2.md). These are targeted revisions where a published
// reassessment supersedes the stored value, or where a well-constrained estimate
// fills a gap the NHM Directory leaves blank. Fields not listed are left untouched.
//
// Field keys map to the decoded record object used by index_v2.html:
//   length (m), massKg (kg), diet, period, mya, subclade, found (array),
//   locomotion, type, meaning.
// `note` explains the change; `refs` lists the primary source(s).

window.V2_CORRECTIONS = {
  dreadnoughtus: {
    set: { massKg: 49000 },
    kind: 'correction',
    note: 'Body mass lowered from ~65 t to ~49 t. The oft-cited 59–65 t figures trace to the volumetric-scaling estimate in Lacovara et al. (2014). Bates et al. (2015) rebuilt the animal with 3-D convex-hull volumetric modelling and found ~48–49 t, showing the original limb-allometry method over-estimated titanosaur mass. The revised value is now the consensus.',
    refs: [
      { label: 'Bates et al. 2015, Biology Letters', url: 'https://royalsocietypublishing.org/doi/10.1098/rsbl.2015.0215' },
      { label: 'Lacovara et al. 2014, Scientific Reports', url: 'https://www.nature.com/articles/srep06196' }
    ]
  },

  deinocheirus: {
    set: { massKg: 6400, length: 11, locomotion: 'on 2 legs' },
    kind: 'gap-fill',
    note: 'The NHM Directory lists no mass and a 10 m length because, for decades, Deinocheirus was known only from its giant arms. Lee et al. (2014) described two near-complete skeletons: ~11 m long and ~6.4 t, confirming it as by far the largest ornithomimosaur. Mass and a corrected length/stance are added from that description.',
    refs: [
      { label: 'Lee et al. 2014, Nature', url: 'https://www.nature.com/articles/nature13874' }
    ]
  },

  spinosaurus: {
    set: { length: 15 },
    kind: 'correction',
    note: 'Length raised from 14 m to ~15 m following the neotype-based reconstruction of Ibrahim et al. (2014, 2020), the current reference skeleton for S. aegyptiacus. Mass (~7.4 t) and the semi-aquatic/shoreline ecology are retained as they remain within the published range, though the degree of aquatic habit is still actively debated.',
    refs: [
      { label: 'Ibrahim et al. 2014, Science', url: 'https://www.science.org/doi/10.1126/science.1258750' },
      { label: 'Ibrahim et al. 2020, Nature (tail)', url: 'https://www.nature.com/articles/s41586-020-2190-3' }
    ]
  },

  dilophosaurus: {
    set: { length: 7 },
    kind: 'correction',
    note: 'Length updated from 6 m to ~7 m. Marsh & Rowe (2020) redescribed all known material and reconstructed a larger, more robustly built animal than the 1954/1970 accounts on which the older figure was based.',
    refs: [
      { label: 'Marsh & Rowe 2020, Journal of Paleontology', url: 'https://www.cambridge.org/core/journals/journal-of-paleontology/article/comprehensive-anatomical-and-phylogenetic-evaluation-of-dilophosaurus-wetherilli-dinosauria-theropoda-with-descriptions-of-new-specimens-from-the-kayenta-formation-of-northern-arizona/' }
    ]
  },

  mapusaurus: {
    set: { massKg: 3300 },
    kind: 'gap-fill',
    note: 'Mass added (~3.3 t). The NHM Directory leaves mass blank; this carcharodontosaurid, known from a bonebed of several individuals (Coria & Currie 2006), is estimated at roughly 3–5 t depending on method. A conservative ~3.3 t is used.',
    refs: [
      { label: 'Coria & Currie 2006, Geodiversitas', url: 'https://sciencepress.mnhn.fr/en/periodiques/geodiversitas/28/1/a-new-carcharodontosaurid-dinosauria-theropoda-from-the-upper-cretaceous-of-argentina' }
    ]
  },

  panoplosaurus: {
    set: { massKg: 1600 },
    kind: 'gap-fill',
    note: 'Mass added (~1.6 t), a standard estimate for this mid-sized nodosaurid; the NHM Directory records none.',
    refs: [{ label: 'Paul 2016, Princeton Field Guide to Dinosaurs (2nd ed.)', url: 'https://press.princeton.edu/books/hardcover/9780691167664/the-princeton-field-guide-to-dinosaurs' }]
  },

  hagryphus: {
    set: { period: 'Late Cretaceous', mya: '76–74 million years ago' },
    kind: 'correction',
    note: 'The NHM Directory does not list a period for Hagryphus. Its type material comes from the Kaiparowits Formation of Utah, radiometrically dated to the late Campanian (~76–74 Ma), so it is placed in the Late Cretaceous.',
    refs: [{ label: 'Zanno & Sampson 2005, JVP', url: 'https://www.tandfonline.com/doi/abs/10.1671/0272-4634%282005%29025%5B0897%3AANOTOD%5D2.0.CO%3B2' }]
  },

  anchiornis: {
    set: { length: 0.4, massKg: 0.24 },
    kind: 'correction',
    note: 'Length reduced from 0.6 m to ~0.40 m and mass added (~0.24 kg). Multiple well-preserved specimens show Anchiornis was a crow-sized paravian; the larger figure over-stated its size.',
    refs: [{ label: 'Pei et al. 2017 & full-body melanosome studies (Li et al. 2010)', url: 'https://www.science.org/doi/10.1126/science.1186290' }]
  },

  patagotitan: {
    set: { massKg: 55000, length: 34 },
    kind: 'correction',
    note: 'Mass eased from 57 t toward ~50–57 t and length from 37.5 m to ~34 m. The 69 t / very-long figures in early coverage of Carballido et al. (2017) were later tempered; volumetric and limb-based estimates cluster around ~50–57 t at ~31–37 m. Mid-range values are used.',
    refs: [{ label: 'Carballido et al. 2017, Proc. Royal Society B', url: 'https://royalsocietypublishing.org/doi/10.1098/rspb.2017.1219' }]
  },

  parksosaurus: {
    set: { massKg: 45 },
    kind: 'gap-fill',
    note: 'Mass added (~45 kg) for this small Late Cretaceous neornithischian; the NHM Directory records none.',
    refs: [{ label: 'Paul 2016, Princeton Field Guide to Dinosaurs (2nd ed.)', url: 'https://press.princeton.edu/books/hardcover/9780691167664/the-princeton-field-guide-to-dinosaurs' }]
  }
};
