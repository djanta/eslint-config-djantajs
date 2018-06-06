'use strict';

/* eslint valid-typeof: ['error', { requireStringLiterals: false }] */

let foo = void undefined;

let qux = '';

module.exports = {
  'undefined': typeof foo === 'undefined',
  'object': typeof foo === 'object',
  'string': typeof foo === 'string',
  'any': typeof foo === typeof qux
};
