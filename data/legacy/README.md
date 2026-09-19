# Legacy data snapshot

These files are the **pre-restructure** bundles (AI-drafted profiles, curated
evidence, fossil records, the hand-written scientific reviews and the review
batches). On 19 September 2026 all of this content was merged and split into
one file per genus under `data/genera/`, which is now the **only** source
`index.html` loads.

Nothing here is read by the main site any more. The files are kept, frozen,
because `index_v2.html` and several scripts in `tools/` (the review ledger,
validators and audits) were written against this layout and have not yet been
ported to `data/genera/`. Do not edit these files expecting the site to change —
edit `data/genera/<id>.json` instead.
