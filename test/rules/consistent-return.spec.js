'use strict';

// eslint consistent-return: ["error", { treatUndefinedAsUnspecified: true }]

/**
 * Qualified default function documentation.
 * @param {object} callback
 * @return {*}
 */
function foo (callback) {
  if (callback) {
    return void callback();
  }

  // no return statement
}

/**
 * Qualified default function documentation.
 *
 * @param {object} condition
 * @return {undefined}
 */
function bar (condition) {
  if (condition) {
    return undefined;
  }
  // no return statement
}

module.exports = {
  foo: foo,
  bar: bar
};
