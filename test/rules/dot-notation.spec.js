'use strict';

// eslint dot-notation: ['error', { allowKeywords: false,
// allowPattern: '^[a-z]+(_[a-z]+)+$'}]

let foo = { 'class': 'CS 101' };
let x = foo['class']; // Property name is a reserved word,
  // square-bracket notation required

let data = {};

data.foo_bar = 42;
// data['fooBar'] = 42; // this will fail
data['foo_bar'] = 42; // no warning
data[x] = x;

module.exports = {
  bar: data.foo_bar
};
