'use strict';

// eslint no-octal-escape: "error"

// let foo = "Copyright \251"; // fail

module.exports = {
  a: 'Copyright \u00A9', // unicode
  b: 'Copyright \xA9' // hexadecimal
};
