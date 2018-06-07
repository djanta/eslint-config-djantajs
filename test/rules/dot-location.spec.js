'use strict';

// eslint dot-location: ['error', 'property']

let object = { property: '' };
let foo = object
    .property;

let bar = object.property;

module.exports = {
  foo: foo,
  bar: bar
};
