'use strict';

/* eslint no-regex-spaces: "error" */

let re = /foo {3}bar/;

re = new RegExp('foo {3}bar');

module.exports = re;

// this will false
/*
let re = /foo   bar/;
re = new RegExp('foo   bar');
*/
