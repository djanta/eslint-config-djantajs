'use strict';

// Rule: no-duplicate-case ['error']

module.exports = (a) => {
  switch (a) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    default:
      break;
  }
};
