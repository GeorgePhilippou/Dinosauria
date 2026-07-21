/* Merge independent review batches over the conservative baseline. A batch may
   deliberately request specialist follow-up. In that case its corrections and
   citations are retained, but the public status stays "baseline audited" until
   the specialist-level check is complete. */
(function mergeScientificReviewBatches() {
  const canonicalPeriods = [
    ['Late Triassic', 237, 201.4],
    ['Early Jurassic', 201.4, 174.7],
    ['Mid Jurassic', 174.7, 161.5],
    ['Late Jurassic', 161.5, 143.1],
    ['Early Cretaceous', 143.1, 100.5],
    ['Late Cretaceous', 100.5, 66]
  ];
  const canonicalPeriod = (period, age) => {
    if (period === 'Middle Jurassic') return 'Mid Jurassic';
    if (canonicalPeriods.some(([label]) => label === period)) return period;
    const values = String(age || '').match(/\d+(?:\.\d+)?/g)?.map(Number);
    if (!values?.length) return period;
    const midpoint = (Math.max(...values) + Math.min(...values)) / 2;
    return canonicalPeriods.find(([, older, younger]) => midpoint <= older && midpoint >= younger)?.[0] || period;
  };
  const batches = [
    window.SCIENTIFIC_REVIEW_BATCH_A_C,
    window.SCIENTIFIC_REVIEW_BATCH_D_L,
    window.SCIENTIFIC_REVIEW_BATCH_M_R,
    window.SCIENTIFIC_REVIEW_BATCH_S_Z,
    window.SCIENTIFIC_REVIEW_BATCH_S_Z_REMAINDER
  ].filter(Boolean);
  const merged = {};

  batches.forEach(batch => {
    Object.entries(batch).forEach(([id, entry]) => {
      const needsSpecialist = entry.status === 'needs-specialist-review';
      const baseline = window.SCIENTIFIC_BASELINE_AUDIT?.[id] || {};
      const record = { ...(needsSpecialist ? baseline.record : {}), ...(entry.record || {}) };
      record.period = canonicalPeriod(record.period, record.mya);
      // A completed batch review must not inherit the conservative baseline's
      // “review pending” summary, inference boilerplate or generic claims. Those
      // fields describe the pre-review state and otherwise contradict the public
      // primary-literature-reviewed badge. Specialist-pending entries retain the
      // baseline guardrails until their review is complete.
      const evidence = needsSpecialist
        ? { ...(baseline.evidence || {}), ...(entry.evidence || {}) }
        : { ...(entry.evidence || {}) };
      // Some batches record the editorial completeness band directly on a 1-5
      // scale, while the established UI stores it as a 0-100 guide score.
      // Normalise the former before rendering so 4/4 does not appear "Sparse".
      if (Number.isFinite(evidence.score) && evidence.score > 0 && evidence.score <= 5) {
        evidence.score = [0, 20, 40, 60, 80, 90][evidence.score];
      }
      if (!evidence.summary) {
        evidence.summary = entry.record?.description
          || 'The cited material has been reviewed conservatively; detailed confidence limits are listed below.';
      }
      if (!evidence.sourceBasis && entry.sources?.length) {
        evidence.sourceBasis = entry.sources.map(source => source.citation).filter(Boolean).join('; ');
      }
      merged[id] = {
        ...(needsSpecialist ? baseline : {}),
        ...entry,
        status: needsSpecialist ? 'audited' : entry.status,
        scientificDisposition: needsSpecialist ? 'needs-specialist-review' : entry.status,
        record,
        evidence,
        residualUncertainty: [
          ...(entry.residualUncertainty || []),
          ...(needsSpecialist ? ['Specialist confirmation is still required before this profile is marked primary-literature reviewed.'] : [])
        ]
      };
    });
  });

  window.SCIENTIFIC_REVIEWS = { ...(window.SCIENTIFIC_REVIEWS || {}), ...merged };
})();
