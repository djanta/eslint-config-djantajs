'use strict';

// eslint multiline-ternary: ["error", "never"]

let bar = false; let baz = true;
let qux = 1; let value3 = 3;
let value1 = 1; let value2 = 2;

let foo = bar ? baz > qux ? value1 : value2 : value3;

module.exports = foo;
