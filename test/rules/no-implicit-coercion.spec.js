'use strict';

// eslint no-implicit-coercion: [2, { "allow": ["!!", "~"] } ]

let foo = [];

module.exports = {
  a: !!foo,
  b: ~foo.indexOf('.')
};
