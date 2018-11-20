const lib = require('./../app/lib');
const assert = require('assert');
const unit = {};

unit['lib.getARandomNumber returns a number'] = done => {
  assert.equal(typeof lib.getARandomNumber(), 'number');
  done();
};

unit['lib.factorial() returns something'] = done => {
  assert.ok(lib.factorial());
  done();
};

unit['lib.factorial() returns a number'] = done => {
  assert.equal(typeof lib.factorial(), 'number');
  done();
};

unit['lib.factorial("string") returns false'] = done => {
  assert.equal(lib.factorial('string'), false);
  done();
};

unit['lib.factorial(1) returns 1'] = done => {
  assert.equal(lib.factorial(1), 1);
  done();
};

unit['lib.factorial(5) returns 120'] = done => {
  assert.equal(lib.factorial(5), 120);
  done();
};

unit['lib.checkIfPalindrome() w/o argument doesn\'t throw'] = done => {
  assert.doesNotThrow(lib.checkIfPalindrome, TypeError);
  done();
};

unit['lib.checkIfPalindrome() returns boolean'] = done => {
  assert.equal(typeof lib.checkIfPalindrome(), 'boolean');
  done();
};

unit['lib.checkIfPalindrome("madam") returns true'] = done => {
  assert.equal(lib.checkIfPalindrome('madam'), true);
  done();
};

unit['lib.checkIfPalindrome("false") returns false'] = done => {
  assert.equal(lib.checkIfPalindrome('false'), false);
  done();
};

unit['lib.checkIfPalindrome() does not throw if called with a number'] = done => {
  lib.checkIfPalindrome(223);
  done();
}

module.exports = unit;