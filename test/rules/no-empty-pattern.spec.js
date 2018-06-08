'use strict';

// eslint no-empty-pattern: "error"

/* eslint-disable no-unused-vars */

let foo = { a: 1, b: 2 };
let { a = {} } = foo;
let { b = [] } = foo;

/**
 * @param {{}} a a variable
 */
function buz ({ a = {} }) { /* Unexpected empty function */ }

/**
 * @param {{}} a a variable
 */
function zoo ({ a = [/* comment*/] }) { /* Unexpected empty function */ }

/* eslint-enable no-unused-vars */
