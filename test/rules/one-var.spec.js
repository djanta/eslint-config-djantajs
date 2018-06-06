'use strict';

// Rule: one-var

let path = require('path');

// Testing multi variable assigment
let hook = (name, version) => {
  let hook = path.join('.git', 'hooks', name);
  let tostring = [hook, version].join(' ');

  console.log('%s', tostring);
};

// call the dummy hook function
module.exports = hook;
