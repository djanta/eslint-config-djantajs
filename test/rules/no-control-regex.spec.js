'use strict';

// Rule: no-control-regex

module.exports = {
  pattern1: /\x20/,
  pattern2: new RegExp('\x20')
};
