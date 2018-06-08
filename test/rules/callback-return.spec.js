'use strict';

// eslint callback-return: ['error', ['callback', 'cb', 'next']]

module.exports = (err, callback) => {
  if (err) {
    return callback(err);
  }
  callback();
};
