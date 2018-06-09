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

module.exports = {
  foo: foo,
  complexity: () => {
    if (process.argv.length > 3 && (process.argv[2] !== '-h' ||
      process.argv[2] !== '--help')) {
      let pargv = process.argv;
      let o = pargv.indexOf('--opts');
      let m = !~o ? 'test/mocha.opts' : pargv[o + 1];

      try {
       let opts = fs.readFileSync(m, 'utf8').replace(/\\\s/g, '%20')
       .split(/\s/).filter(Boolean)
       .map(value => value.replace(/%20/g, ' '));

       process.argv = process.argv.slice(0, 2)
       .concat(opts.concat(process.argv.slice(2)));
       }
       catch (err) {
        // ignore
       }
      process.env.LOADED_MOCHA_OPTS = true;
    }
    else {
      return void undefined;
    }
  }
};
