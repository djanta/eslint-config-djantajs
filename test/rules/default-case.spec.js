'use strict';

// eslint default-case: ["error", { "commentPattern": "^skip\\sdefault" }]

let a = 1;

switch (a) {
  case 1:
    /* code */
    break;

  // skip default
}
