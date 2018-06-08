'use strict';

// eslint no-new-func: "error"

// let x = new Function("a", "b", "return a + b");
// let x = Function("a", "b", "return a + b");

/**
 * Default comment
 * @param {number} a number a
 * @param {number} b number b
 * @return {*}
 */
let x = function (a, b) {
  return a + b;
};

module.exports = x;
