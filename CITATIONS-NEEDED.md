# Citation and scientific-source audit

Updated: 2026-07-16

The old citation backlog in this file described the pre-audit wiki, when most
profiles exposed catalogue links or generated prose without taxon-specific
literature. It is retained under the same filename so old links do not break,
but it now records the completed catalogue-wide audit and the remaining review
boundary.

## Current status

- Catalogue profiles: 328
- Taxon-specific profiles with a scientific review or conservative specialist audit: 328
- Profiles meeting the full editorial literature-review threshold: 299
- Profiles explicitly awaiting specialist confirmation: 29
- Unreviewed profiles: 0
- Profiles exposing legacy AI-drafted narrative: 0

Every active profile now records a reviewed age and period, taxonomic path,
known fossil material, an evidence/confidence statement, residual uncertainty,
and labelled sources. PBDB occurrence counts are retained as locality and age
context only; they are not used as a measure of skeletal completeness.

The 29 specialist-pending entries are not unchecked placeholders. They contain
taxon-specific, sourced, conservative summaries. They remain visibly qualified
because the type material is especially fragmentary, the name has received
little modern study, or the available literature does not support a more
confident editorial conclusion.

## Release checks

```bash
node tools/validate-scientific-reviews.mjs
node tools/validate-review-sources.mjs
node tools/scientific-review-ledger.mjs
```

The first command fails if a catalogue profile lacks the required review fields
or silently retains a quick fact contradicted by its reviewed text. The second
checks DOI citations against registry metadata and fails on unresolved or
misassigned links. The third regenerates `SCIENTIFIC-REVIEW.md` and the JSON
ledger used to track review status.

## What this audit does not claim

Scientific review is a dated editorial state, not a promise that taxonomy will
never change. New specimens, redescription of old material and competing
phylogenetic analyses can revise an entry. Active disagreements are therefore
reported as disagreements rather than resolved by editorial preference. The
review ledger and per-profile review date make the next update traceable.
