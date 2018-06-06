'use strict';

// Rule: space-before-function-paren

/**
 * Name comment
 */
function name () {
  // ...
}

/**
 * Named bar function
 */
let bar = function () {
  // ...
  name();
};

/**
 * Foo class
 * @type {Foo}
 */
class Foo {
  /**
   * @constructor
   */
  constructor () {
    // ...
    bar();
  }
}

let foo = {
  bar () {
    return new Foo();
  }
};

module.exports = foo;
