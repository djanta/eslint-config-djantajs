'use strict';

/* eslint no-func-assign: "error" */

let foo = function () { /* this to avoid empty function */ };

foo = bar;

/**
 * This comment to avoid 'require-jsdoc' constraint violation
 */
function bar () {
  foo = bar; // `foo` is shadowed.
  /* eslint-disable no-console */
  console.log(foo);
  /* eslint-enable no-console */
}

/*
function foo (foo) { // `foo` is shadowed.
  foo = bar;
}

function foo () {
  let foo = bar;  // `foo` is shadowed.
} */
