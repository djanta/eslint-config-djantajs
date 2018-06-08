'use strict';

// eslint global-require: "error"

let fs = require('fs');

const DEBUG = false;

// you can use a ternary to determine which module to require
let type = DEBUG ? require('fs') : require('path');

/**
 * Read file function
 * @param {string} filename file name
 * @param {Function} callback callback function
 */
function readFile (filename, callback) {
  fs.readFile(filename, callback);
}

module.exports = {
  read: readFile,
  logger: type
};
