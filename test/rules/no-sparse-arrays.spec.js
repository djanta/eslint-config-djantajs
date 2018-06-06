'use strict';

/* eslint no-sparse-arrays: "error" */

let items = [];
items = new Array(23);

// trailing comma (after the last element) is not a problem
let colors = ['red', 'blue'];

// this will false
/*
 let items = [,];
 let colors = [ "red",, "blue" ];
 */

module.exports = {
  items: items,
  colors: colors
};
