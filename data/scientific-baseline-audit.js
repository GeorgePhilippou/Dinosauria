/* Conservative whole-catalogue safety pass.
   This is deliberately not the same as a primary-literature review. It replaces
   unsupported narrative with source-reported catalogue facts while a genus is
   still in the literature-review queue. Full reviews in SCIENTIFIC_REVIEWS take
   precedence over these entries. */
(function buildScientificBaselineAudit() {
  const rows = [
    ...(window.EXISTING_DINOSAUR_RECORDS || []),
    ...(window.NHM_IMPORTED_DINOSAUR_RECORDS || [])
  ];
  const pbdb = window.PBDB_DINOSAUR_ENRICHMENT || {};
  const fullReviews = window.SCIENTIFIC_REVIEWS || {};
  const baseline = {};

  const clean = value => value && !/^not listed by nhm$/i.test(String(value)) ? value : null;
  const listText = values => values?.length ? values.join(', ') : 'the locality records linked below';

  rows.forEach(row => {
    const [id, name, latin, , type, period, mya, clade, subclade, diet, locomotion, length, massKg, found, food, teeth, , , , , sourceUrl, dataOrigin, sourceMeta] = row;
    if (fullReviews[id]?.status === 'reviewed') return;
    const occurrence = pbdb[id] || {};
    const formations = occurrence.formations || [];
    const taxonomy = sourceMeta?.taxonomy?.length
      ? sourceMeta.taxonomy
      : ['Dinosauria', clade, subclade].filter(Boolean);
    const sourceLabel = dataOrigin === 'NHM Dino Directory' ? 'Natural History Museum catalogue' : 'curated catalogue record';
    const facts = [
      `${latin} is filed as a ${String(type || 'dinosaur').toLowerCase()} from the ${period}, with a source-reported age of ${mya}.`,
      `The catalogue records fossils from ${listText(found)}${formations.length ? `; PBDB occurrence data include ${formations.slice(0, 3).join(', ')}${formations.length > 3 ? ' and additional units' : ''}` : ''}.`,
      `${diet || 'Diet'} and ${clean(locomotion) || 'locomotion'} are broad biological interpretations; detailed behaviour is not treated as directly observed.`,
      `${length ? `The listed length of ${length} m is a source-reported estimate` : 'No body-length estimate is retained'}${massKg ? ` and the listed mass is ${massKg.toLocaleString()} kg` : '; no sourced mass estimate is retained'}.`
    ];
    baseline[id] = {
      status: 'audited',
      reviewedOn: '2026-07-16',
      reviewer: 'Dinosauria conservative baseline audit',
      consensusScope: ['catalogue identity', 'source-reported age', 'source-reported geography', 'unsupported-claim removal', 'uncertainty labelling'],
      record: {
        period,
        mya,
        taxonomy,
        description: `${name} is a ${String(diet || '').toLowerCase()} ${String(type || 'dinosaur').toLowerCase()} recorded from the ${period}. This conservative summary uses the ${sourceLabel} for identity, age and geography and avoids detailed anatomical or behavioural claims until the cited literature has been checked genus by genus.`,
        facts
      },
      ageReviewNote: occurrence.firstAppearanceMa && occurrence.lastAppearanceMa
        ? `The profile range is source-reported. PBDB occurrences span ${occurrence.firstAppearanceMa}–${occurrence.lastAppearanceMa} Ma; any difference remains flagged for specimen- and formation-level review.`
        : 'No independent PBDB numerical occurrence range is available for comparison.',
      sources: [
        { type: 'catalogue-source', citation: `${sourceLabel}: ${name}`, url: sourceUrl },
        ...(occurrence.source ? [{ type: 'occurrence-database', citation: `Paleobiology Database taxon record: ${name}`, url: occurrence.source }] : [])
      ].filter(source => source.url),
      residualUncertainty: [
        'Primary literature has not yet been checked line by line for this profile.',
        'Occurrence assignments may include referred material of unequal taxonomic certainty.',
        'Body-size and behavioural detail remain omitted or explicitly source-reported until reviewed.'
      ],
      evidence: {
        score: 25,
        summary: 'Authoritative-source baseline only; skeletal completeness has not yet received a specimen-level literature review.',
        material: 'See the linked original or catalogue source. PBDB occurrence counts are not used as a proxy for skeletal completeness.',
        formations: formations.length ? formations.join(', ') : 'Formation detail not independently verified in the baseline audit.',
        ageSupport: `Catalogue range: ${mya}. ${occurrence.firstAppearanceMa && occurrence.lastAppearanceMa ? `PBDB sampled range: ${occurrence.firstAppearanceMa}–${occurrence.lastAppearanceMa} Ma.` : 'No PBDB numerical comparison available.'}`,
        occurrenceSupport: `${occurrence.occurrenceCount ?? 'No'} PBDB occurrence records are available as locality context only.`,
        inferredAnatomy: 'Posture, soft tissues, colour and detailed behaviour remain inferred unless a later full review states otherwise.',
        confidenceLimit: 'This profile has passed a conservative source and wording audit, not a complete primary-literature review.',
        sourceBasis: 'Source catalogue and PBDB occurrence context.',
        specimens: [],
        uncertainties: ['Primary review pending', 'Occurrence referrals may vary', 'Completeness not scored from occurrence count'],
        claims: {
          bodySize: { level: length ? 'estimated' : 'unknown', reason: length ? 'The displayed value is retained as a source-reported estimate, not a direct measurement of a complete individual.' : 'No sourced estimate is retained.' },
          diet: { level: 'broad', reason: `${diet || 'Diet'} is retained as a broad clade/anatomy-level interpretation.` },
          movement: { level: clean(locomotion) ? 'broad' : 'unknown', reason: clean(locomotion) ? 'The source-reported locomotor category is broad and does not establish speed or detailed gait.' : 'No source-specific locomotor statement is retained.' },
          classification: { level: 'provisional', reason: 'The source taxonomy is retained pending a genus-level systematic-literature check.' }
        }
      }
    };
  });

  window.SCIENTIFIC_BASELINE_AUDIT = baseline;
  window.SCIENTIFIC_REVIEWS = { ...baseline, ...fullReviews };
})();
