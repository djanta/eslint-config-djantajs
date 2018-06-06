'use strict';

// eslint class-methods-use-this: "error"

/**
 * @type {A}
 */
class A {
  /**
   * Default method comment
   */
  foo () {
    this.bar = 'Hello World'; // OK, this is used
  }
}

/**
 * @type {B}
 */
class B {
  /**
   * @constructor
   */
  constructor () {
    // OK. constructor is exempt
  }
}

/**
 * @type {C}
 */
class C {
  /**
   * Default method comment
   */
  static foo () {
    // OK. static methods aren't expected to use this.
  }
}

module.exports = {
  a: A,
  b: B,
  c: C
};
