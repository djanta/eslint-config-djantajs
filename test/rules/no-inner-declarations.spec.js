'use strict';

// eslint no-inner-declarations: "error"

let test = true;
let bar = 42;

if (test) {
  let baz = 43;
  bar = baz;
}

/**
 * Default js documentation comment
 */
function doAnotherThing () {
  let baz = 81;
  bar = baz;

  /* eslint-disable no-console */
  console.log(bar);
  /* eslint-enable no-console */
}

module.exports = doAnotherThing;
