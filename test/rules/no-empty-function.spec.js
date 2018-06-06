'use strict';

// Rule: no-empty-function ['error']

/**
 * Function commend to conform the validation rule: require-jsdoc
 */
function foo () {
  // do nothing.
}

module.exports = () => {
  foo(); // invoke the foo function ...
};
