'use strict';

/* eslint no-unreachable: "error" */

/**
 * To avoid js documentation rule failure
 * @return {*}
 */
function foo () {
  return bar();
  /**
   * Internal comment
   * @return {number}
   */
  function bar () {
    return 1;
  }
}

// this will false
/*
switch (foo) {
  case 1:
    break;
    foo();
}
*/

foo();
