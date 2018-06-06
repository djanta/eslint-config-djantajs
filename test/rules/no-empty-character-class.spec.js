'use strict';

module.exports = {
  caseOkayOne: /^abc[a-z]/.test('abcdefg'),
  caseOkayTwo: 'abcdefg'.match(/^abc[a-z]/),

  // caseWrongOne: /^abc[]/.test('abcdefg'),
  // caseWrongTwo: 'abcdefg'.match(/^abc[]/)
};
