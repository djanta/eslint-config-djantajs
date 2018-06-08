'use strict';

// eslint no-invalid-regexp: ["error", { "allowConstructorFlags": ["u", "y"] }]

module.exports = {
  u: new RegExp('.', 'y'),
  yu: new RegExp('.', 'yu')
};
