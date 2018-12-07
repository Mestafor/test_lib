'user strict';
/**
 * Unit Test
 */

// Dependencies
const assert = require('assert');
const lib = require('./../app/lib');

// Container from unit test
const unit = {};

/**
 * TEST PROP
 */
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

/**
 * TEST MAYBE
 */
unit['Maybe - should not throw an error, when call it without arguments'] = (done) => {
  assert.doesNotThrow(() => {
    lib.Maybe();
    done();
  }, TypeError);
}

unit['Maybe - should return 1'] = (done) => {
  assert.equal(lib.Maybe(1).fold(() => null, res => res), 1);
  done();
}

unit['Maybe - should return null'] = (done) => {
  assert.equal(lib.Maybe(null).fold(() => null, () => 1), null);
  done();
}

unit['Maybe - should return sum of two numbers'] = (done) => {

  const sum = (a) => (b) => a + b;

  const res = lib.Maybe(sum)
    .ap(lib.Maybe(1))
    .ap(lib.Maybe(2))
    .fold(() => null, res => res);

  assert.equal(res, 3);

  done();
}

/**
 * TEST EITHER
 */
const findColor = name => lib.Either(({
  green: 'green',
  blue: 'blue',
  red: 'red'
})[name]);

unit['EITHER - should return green color'] = (done) => {
  const color = findColor('green').fold(() => null, res => res);
  assert.equal(color, 'green');
  done();
}

unit['EITHER - should return "RED" color'] = (done) => {
  const color = findColor('red').map(color => color.toUpperCase()).fold(() => null, res => res);
  assert.equal(color, 'RED');
  done();
};

unit['EITHER - should concat two colors with coma'] = (done) => {
  const color = findColor('red').map(res => `${res},`).concat(findColor('blue')).fold(() => null, res => res);
  assert.equal(color, 'red,blue');
  done();
};

unit['EITHER - should return "YELLOW" color but throw error (example error)'] = (done) => {
  const color = findColor('yellow').map(color => color.toUpperCase()).fold(() => null, res => res);
  assert.equal(color, 'YELLOW');
  done();
};

// Export module
module.exports = unit;
