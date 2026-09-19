# Genus content files

One JSON file per genus, named by its catalogue id (`tyrannosaurus.json`).
`index.html` fetches a file when its profile opens, so **editing a file here
changes the live site on the next page load** — no build step for content.
If you change a field inside `review.record` (period, age, description, facts,
taxonomy…) the catalogue grid also needs `data/genera-index.js` rebuilt; the
`genera-index` GitHub Action does that automatically on push.

Edit on GitHub: open the file, click the pencil, change the text, commit.
Keep the JSON valid — every string in double quotes, commas between items, no
trailing comma after the last item. Run `npm run genera:validate` locally if
you have Node, or watch the Action's result after pushing.

## Structure

```jsonc
{
  "id": "aardonyx",              // must match the filename
  "name": "Aardonyx",

  "profile": {                   // long-form prose used when no presentation block exists
    "overview": ["paragraph", "paragraph"],
    "fossilSites": [{ "name": "", "region": "", "lat": 0, "lon": 0, "note": "" }],
    "focusedClade": { "trunk": ["Dinosauria", "...", "Aardonyx"], "sideBranches": [] },
    "articles": [{ "title": "", "body": "" }],
    "citations": [{ "label": "", "url": "" }],
    "provenance": "ai-drafted"   // present on the 218 machine-drafted profiles; remove once hand-checked
  },

  "richProfile": { ... },        // six flagship genera only: extra evidence detail
  "fossilRecord": { "formations": "", "material": "", "completeness": "", "paleo": "", "evidence": "" },
  "remainsImage": { "file": "Commons filename.jpg", "label": "", "note": "" },

  "review": {                    // the scientific review — drives everything on a reviewed profile
    "status": "reviewed",        // reviewed | audited | needs-specialist-review
    "reviewedOn": "2026-09-19",
    "reviewer": "Dinosauria editorial review",
    "consensusScope": ["what was checked", "..."],
    "record": {                  // overrides the catalogue card (also extracted into genera-index.js)
      "period": "Early Jurassic", "mya": "about 200–190 million years ago",
      "taxonomy": ["Dinosauria", "..."], "diet": "", "locomotion": "",
      "description": "", "facts": ["", ""]
    },
    "presentation": { ... },     // the polished tier — see aardonyx.json for the full shape
    "ageReviewNote": "",
    "sources": [{ "type": "original-description", "citation": "Author (year), title", "url": "https://doi.org/..." }],
    "residualUncertainty": ["", ""],
    "evidence": {
      "score": 64,               // 0–100 completeness guide
      "summary": "", "material": "", "formations": [""], "confidenceLimit": "", "sourceBasis": "",
      "specimens": [{ "name": "Holotype", "id": "BP/1/6254", "institution": "", "note": "" }],
      "uncertainties": ["short chip", "short chip"],
      "panel": { ... }           // specimen-led evidence board — see aardonyx.json
    }
  }
}
```

`presentation` and `evidence.panel` are optional; a genus without them falls
back to `profile` prose and the plain evidence summary. The complete key list
for both is in `aardonyx.json`, and `tools/validate-genera.mjs` checks that the
required ones are present.

## Images

`file` fields are bare Wikimedia Commons filenames (as on the file's page,
without `File:`). The site builds the image URL itself. Always fill `credit`
(creator · licence) and `sourceUrl` (the Commons file page) so attribution is
shown; only use files whose licence permits reuse (public domain, CC0, CC BY,
CC BY-SA).
