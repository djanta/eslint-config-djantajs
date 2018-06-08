'use strict';

// eslint no-fallthrough: [error, { "commentPattern": "break[\\s\\w]*omitted" }]

module.exports = (foo) => {
  switch (foo) {
    case 1:
      // doSomething();
    // break omitted
    case 2:
      // doSomething();
    // skip default
  }

  switch (foo) {
    case 1:
      // doSomething();
    // caution: break is omitted intentionally
    default:
      // doSomething();
  }
};
