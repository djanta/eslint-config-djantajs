'use strict';

/* eslint no-obj-calls: "error" */

/**
 * To avoid undocuments function error
 *
 * @param {number} r PI value
 * @return {number}
 */
function area (r) {
  return Math.PI * r * r;
}

let object = JSON.parse('{}');
let value = Reflect.get({ x: 1, y: 2 }, 'x');

area(0);

// These will false

/*
 var math = Math();
 var json = JSON();
 var reflect = Reflect();
 */

module.exports = {
  object: object,
  value: value
};

