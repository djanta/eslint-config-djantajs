'use strict';

const assert = require('assert');
const eslint = require('eslint');
const config = require('../');

const path = require('path');
const fs = require('fs');

/**
 * Find all files inside a dir, recursively.
 * @function getAllFiles
 * @param  {string} dir Dir path string.
 * @return {string[]} Array with all file names that are inside the directory.
 */
const walker = dir => fs.readdirSync(dir).reduce((files, file) => {
  const name = path.join(dir, file);
  const isDirectory = fs.statSync(name).isDirectory();
  return isDirectory ? [...files, ...walker(name)] : [...files, name];
}, []);

// const files = ['index.js', 'test/test.spec.js']
  // .concat(walker(path.join(path.resolve( __dirname ), 'rules' )));

const files = ['index.js', 'test/test.spec.js',
  ...walker(path.join(path.resolve(__dirname), 'rules'))];

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

files.forEach((file, index) =>
  assert(report.results[index].filePath.endsWith(file)));
