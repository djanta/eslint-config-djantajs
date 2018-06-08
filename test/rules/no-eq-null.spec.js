'use strict';

// eslint no-eq-null: "error"

let foo = void undefined;
let bar = () => { /* Unexpected empty function */ };

if (foo === null) {
  bar();
}

module.exports = (qux) => {
  while (qux !== null) {
    bar();
  }
};
