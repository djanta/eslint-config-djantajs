'use strict';

// Rule: space-in-parens: ['error', 'always', { exceptions: ['[]',
                                                            // 'empty', '()'] }]

module.exports = () => {
  let foo = (1 + 2) * 3;
  (function () { return foo(); }());
};
