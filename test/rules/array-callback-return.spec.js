'use strict';

/* eslint array-callback-return: "error" */

[].reduce((memo, item, index) => {
  memo[item] = index;
  return memo;
}, {});

let foo = Array.from([], (node) => {
  if (node.tagName === 'DIV') {
    return true;
  }
  return false;
});

foo.map(node => node.getAttribute('id'));
