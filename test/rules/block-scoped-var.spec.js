'use strict';

/* eslint block-scoped-var: "error" */

/**
 * Comment
 */
function doIf () {
  let build;
  let cond = true;

  if (cond) {
    build = true;
  }

  console.log(build);
}

/**
 * Comment
 * @return {*}
 */
function doIfElse () {
  let build;
  let cond = true;

  if (cond) {
    build = true;
  }
  else {
    build = false;
  }
  return build;
}

/**
 * Comment
 * @return {{f: *, build: *}}
 */
function doTryCatch () {
  let build;
  let f;

  try {
    build = 1;
  }
  catch (e) {
    f = build;
  }

  return { f: f, build: build };
}

module.exports = {
  doIf: doIf,
  doIfElse: doIfElse,
  doTryCatch: doTryCatch
};
