'use strict';

// rule: complexity [3]

/**
 * Comment due if missing documentation e.g: 'require-jsdoc'
 */
function foo () {
  let nested4 = true;
  for (;;) { // Nested 1 deep
    let val = () => (param) => { // Nested 2 deep
      if (param) { // Nested 3 deep
        if (nested4) { // Nested 4 deep
        }
      }
    };
    val(); // explicit invocation to avoir unsued variable
  }
}

module.exports = foo;
