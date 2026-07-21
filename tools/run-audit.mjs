import { spawnSync } from 'node:child_process';

const RUN_SMOKE = !process.argv.includes('--skip-smoke');

function run(label, args) {
  console.log(`\n## ${label}`);
  const result = spawnSync(process.execPath, args, {
    stdio: 'inherit',
    env: process.env
  });

  if (result.error) {
    console.error(result.error.message);
    process.exitCode = 1;
    return false;
  }

  if (result.status !== 0) {
    process.exitCode = result.status || 1;
    return false;
  }

  return true;
}

run('Scientific review coverage and consistency', ['tools/validate-scientific-reviews.mjs']);
run('Data validation', ['tools/validate-data.mjs']);
run('Fact-check scan', ['tools/factcheck-scan.mjs']);
run('Age-range review queue', ['tools/age-review.mjs']);
run('Content audit', ['tools/content-audit.mjs', '--out=content-audit.md', '--top=80']);

if (RUN_SMOKE) {
  run('Browser smoke test', ['tools/smoke-test.mjs']);
} else {
  console.log('\n## Browser smoke test');
  console.log('Skipped because --skip-smoke was provided.');
}

if (process.exitCode) {
  console.error('\nAudit completed with failures.');
} else {
  console.log('\nAudit completed successfully.');
}
