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

// Centered text in the screen
_app.centered = (str = '') => {
  const width = process.stdout.columns;
  const paddingLeft = (width - str.length) / 2;
  let line = '';
  for (let i = 0; i < paddingLeft; i++) {
    line += ' ';
  }
  console.log(line + str);
};

_app.horizontalLine = () => {
  const width = process.stdout.columns;
  let line = '';
  for (let i = 0; i < width; i++) {
    line += '~';
  }
  console.log(line);
};

_app.verticalSpace = (n = 1) => {
  for (let i = 0; i < n; i++) {
    console.log();
  }
};

// Produce a test outcome report
_app.produceTestReport = (limit, successes, errors) => {
  _app.verticalSpace();
  _app.horizontalLine();
  _app.centered('BEGIN THE REPORT');
  _app.horizontalLine();
  _app.verticalSpace();

  console.log('\x1b[33m%s\x1b[0m \x1b[33m%s\x1b[0m', 'Total Test:', limit);
  console.log('\x1b[32m%s\x1b[0m \x1b[32m%s\x1b[0m', 'Pass:      ', successes);
  console.log('\x1b[31m%s\x1b[0m \x1b[31m%i\x1b[0m', 'Fail:      ', errors.length);

  if (errors.length > 0) {
    _app.verticalSpace();
    console.log('\x1b[31m%s\x1b[0m', 'ERRORS DETAILS:');
    _app.verticalSpace();
    errors.forEach(error => {
      console.log('\x1b[31m%s:\x1b[0m', error.name);
      console.log(error.error);
      _app.verticalSpace();
    });
  }

  _app.verticalSpace();
  _app.horizontalLine();
  _app.centered('END THE REPORT');
  _app.horizontalLine();
  _app.verticalSpace();
};

// Run tests function
_app.runTests = () => {
  const errors = [];
  const limit = _app.getTestCount();
  let count = 0;
  let successes = 0;

  _app.horizontalLine();
  _app.centered('Run test');
  _app.horizontalLine();
  _app.verticalSpace();

  Object.values(_app.tests)
    .forEach(subTest => {
      Object.entries(subTest).forEach(([testName, testFn]) => {
        try {
          testFn(() => {
            successes++;
            count++;
            console.log('\x1b[32m%s%s\x1b[0m', 'Passed: ', testName);

            if (count === limit) {
              _app.produceTestReport(limit, successes, errors);
            }
          });
        } catch (e) {
          count++;
          errors.push({
            name: testName,
            error: e
          });
          console.log('\x1b[31m%s%s\x1b[0m', 'Error', testName);

          if (count === limit) {
            _app.produceTestReport(limit, successes, errors);
          }
        }
      });
    });

};


// Run tests
_app.runTests();
