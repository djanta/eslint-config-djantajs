'use strict';

/* eslint no-func-assign: "error" */

let foo = function () { /* this to avoid empty function */ };

foo = bar;

/**
 * This comment to avoid 'require-jsdoc' constraint violation
 */
function bar () {
  foo = bar; // `foo` is shadowed.

  console.log(foo);
}

/*
function foo (foo) { // `foo` is shadowed.
  foo = bar;
}

function foo () {
  let foo = bar;  // `foo` is shadowed.
} */
