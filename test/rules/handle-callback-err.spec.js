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
    /* eslint-disable no-console */
    console.log(error.stack);
    /* eslint-enable no-console */
  }
  doSomething();
}

module.exports = loadData;
