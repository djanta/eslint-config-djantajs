'use strict';

// eslint handle-callback-err: ['error', '^(err|error|anySpecificError)$']

/**
 * Do something function
 */
let doSomething = () => {
  // Unexpecting empty function ...
};

/**
 * Qualified default class constructor
 * @param {Error} error callback error
 * @param {{}} data result data
 */
function loadData (error, data) {
  if (error) {
    console.log(error.stack);
  }
  doSomething();
}

module.exports = loadData;
