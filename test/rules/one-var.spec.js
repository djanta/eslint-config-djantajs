'use strict';

// Rule: one-var

let path = require('path');

// Testing multi variable assigment
let hook = (name, version) => {
  let hook = path.join('.git', 'hooks', name);
  let tostring = [hook, version].join(' ');

  /* eslint-disable no-console */
  console.log('%s', tostring);
  /* eslint-enable no-console */
};

// call the dummy hook function
module.exports = hook;
