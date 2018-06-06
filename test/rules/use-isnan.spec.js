'use strict';

/* eslint use-isnan: "error" */

let foo = void undefined;

if (isNaN(foo)) {
  // ...
}

if (!isNaN(foo)) {
  // ...
}

// these will false
/*
if (foo == NaN) {
  // ...
}

if (foo != NaN) {
  // ...
}
*/
