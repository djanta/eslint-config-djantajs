'use strict';

// rule: max-params [4]

/**
 * Comment due if missing documentation e.g: 'require-jsdoc'
 * @param {string} bar any comment
 * @param {string} baz any comment
 * @param {string} qux any comment
 * @param {string} aux any comment
 */
function max (bar, baz, qux, aux) {
  // this function is violating the rule: no-empty-function
}

module.exports = max;
