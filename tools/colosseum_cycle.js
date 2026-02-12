#!/usr/bin/env node
// Wrapper to run Colosseum MoveRegistry build cycle
// Calls the main colosseum_cycle.js script

const { execSync } = require('child_process');
const path = require('path');

const scriptPath = path.join(__dirname, '..', '..', 'colosseum-krump-agent', 'scripts', 'colosseum_cycle.js');

console.log(`Starting Colosseum MoveRegistry cycle: ${scriptPath}`);
try {
  execSync(`node "${scriptPath}"`, { stdio: 'inherit' });
  console.log('Colosseum cycle completed.');
} catch (err) {
  console.error('Colosseum cycle failed:', err.message);
  process.exit(1);
}
