'use strict';

// eslint no-else-return: "error"

module.exports = (x, z, w) => {
  if (x) {
    return y;
  }
  else if (z) {
    x = 'foo';
  }
  else {
    x = w;
    return x;
  }
  return x;
};
