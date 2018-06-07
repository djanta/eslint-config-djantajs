'use strict';

/* eslint no-unsafe-finally: "error" */

let foo = function (a) {
  try {
    return 1;
  }
  catch (err) {
    // return 2; // this will violate the rule: 'no-unreachable'
    throw err;
  }
  finally {
    switch (a) {
      case 1: {
        console.log('no-unsafe-finally');
      break;
      }

      // ignore default
    }
  }
};

foo(5);
