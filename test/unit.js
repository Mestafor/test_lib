'user strict';
/**
 * Unit Test
 */

// Dependencies
const assert = require('assert');
const lib = require('./../app/lib');

// Container from unit test
const unit = {};

unit['prop should not throw an new error, when object does not exist'] = (done) => {
  const testObj = {};

  assert.doesNotThrow(() => {
    lib.prop(['path', 'does', 'not', 'exist'], testObj);
    done();
  }, TypeError);
};

unit['prop should return 1'] = (done) => {
  const testObj = { test: 1 };

  assert.equal(
    lib.prop(['test'], testObj),
    1
  );
  done();
};

unit['prop should return 2'] = (done) => {
  const testObj = { test: { deep: 2 } };

  assert.equal(
    lib.prop(['test', 'deep'], testObj),
    2
  );
  done();
};

unit['prop should return "null" when parameter does not exist'] = (done) => {
  const testObj = { test: { deep: 2 } };

  assert.equal(
    lib.prop(['test, deep', 'doesNotExist'], testObj),
    null
  );
  done();
};

// Export module
module.exports = unit;
