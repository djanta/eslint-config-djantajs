'use strict';

const assert = require('assert');
const eslint = require('eslint');
const config = require('../');

const files = ['index.js', 'test/test.spec.js'];

const options = {
  useEslintrc: false,
  envs: ['node', 'es6'],
  parserOptions: { ecmaVersion: 2017 },
  rules: config.rules,
};

const report = new eslint.CLIEngine(options).executeOnFiles(files);

// console.log('Result:\n%s\n', JSON.stringify(report.results, null, 2));

assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);

files.forEach((file, index) => {
  assert(report.results[index].filePath.endsWith(file));
});
