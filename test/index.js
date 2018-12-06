/**
 * Tst runner
 */

// Application logic for the test runner
const _app = {};

// Container for tests
_app.tests = {};

_app.tests.unit = require('./unit');

// Count of tests
_app.getTestCount = () => {
  let count = 0;

  Object.values(_app.tests)
    .forEach(subTest => {
      count += Object.keys(subTest).length;
    });

  return count;
}

// Run tests function
_app.runTests = () => {
  const errors = [];
  const limit = _app.getTestCount();
  let count = 0;
  let successes = 0;

  Object.values(_app.tests)
    .forEach(subTest => {
      Object.entries(subTest).forEach(([testName, testFn]) => {
        try {
          testFn(() => {
            successes++;
            count++;
            console.log('\x1b[32m%s\x1b[0m', testName);
          });
        } catch (e) {
          count++;
          errors.push({
            name: testName,
            error: e
          });
          console.log('\x1b[31m%s\x1b[0m', testName);
        }
      });
    });

};


// Run tests
_app.runTests();
