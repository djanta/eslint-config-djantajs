'use strict';

// eslint no-path-concat: "error"

// let fullPath = __dirname + '/foo.js'; // this will fail

let dirname = __dirname;
// let fullPath = dirname + '/foo.js';

module.exports = dirname + '/foo.js';
