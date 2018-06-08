'use strict';

// eslint no-extra-label: "error"

module.exports = (a, b) => {
  // while (a) { break; }
  // for (let i = 0; i < 10; ++i) { break; }

  switch (a) {
    case 0:
      // Case 0
    break;
    // skip default
  }

  A: {
    break A;
  }

  B: while (a) {
    /* while (b) {
      break B;
    } */
  }

  C: switch (a) {
    case 0:
      /* while (b) {
        break C;
      } */
      // No comment
    break;
      // skip default
  }
};
