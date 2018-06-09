'use strict';

// eslint max-statements: ["error", 10]

module.exports = () => {
  /* eslint-disable no-unused-vars */
  let foo1 = 1;
  let foo2 = 2;
  let foo3 = 3;
  let foo4 = 4;
  let foo5 = 5;
  let foo6 = 6;
  let foo7 = 7;
  let foo8 = 8;
  let foo9 = 9;
  let foo10 = 10;
  // let foo11 = 11; // Too many.
  /* eslint-enable no-unused-vars */
  return () => {
    // The number of statements in the inner function does not count toward the
    // statement maximum.

    return 42;
  };
};
