'use strict';

// eslint no-use-before-define: ["error", { "classes": false,
//  variables: false, functions: false
// }]

/**
 * Default documentation
 * @return {A}
 */
function foofn () {
  return new A();
}

/**
 * Default documentation
 */
function baz () {
  /* eslint-disable no-console */
  console.log(foo);
  /* eslint-enable no-console */
}

let foo = 1;

/**
 * Default class comment
 * @type {A}
 */
class A {
  /**
   * Default class constructor
   * @constructor
   */
  constructor () {
    this.baz = baz;
  }
}

module.exports = foofn;
