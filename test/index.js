const _app = {};

//Test container
_app.tests = {};
_app.tests.unit = require('./unit');

_app.countTests = () => {
  let counter = 0;
  for (var key in _app.tests) {
    if (_app.tests.hasOwnProperty(key)) {
      const subTests = _app.tests[key];
      for (const testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          counter++;
        }
      }
    }
  }
  return counter;
};

_app.runTests = () => {
  const errors = [];
  const limit = _app.countTests();
  let successes = 0;
  let counter = 0;
  console.log('');
  console.log('Tests run:');
  console.log('');
  for (const key in _app.tests) {
    if (_app.tests.hasOwnProperty(key)) {
      const subTests = _app.tests[key];
      for (const testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          (function(){
            const tmpTestName = testName;
            const testValue = subTests[testName];
            try {
              testValue(function(){
                //if it called back, it succeded
                console.log('\x1b[32m%s\x1b[0m', tmpTestName);
                counter++;
                successes++;
                if (counter == limit) {
                  _app.produceTestReport(limit, successes, errors);
                }
              });
            } catch(e) {
              errors.push({
                'name': testName,
                'error' : e
              });
              console.log('\x1b[31m%s\x1b[0m', tmpTestName);
              counter++;
              if (counter == limit) {
                _app.produceTestReport(limit, successes, errors);
              }
            }
          })()
        }
      }
    }
  }
};

_app.produceTestReport = (limit, successes, errors) => {
  console.log('');
  console.log('<Begin test report');
  console.log('');
  console.log('Total Tests: ', limit);
  console.log('Passed Tests: ', successes);
  console.log('Failed Tests: ', errors.length);
  console.log('')
  if (errors.length > 0) {
    console.log('<<Begin error details');
    console.log('');
    errors.forEach(err => {
      console.log('\x1b[31m%s\x1b[0m', err.name)
      console.dir(err.error, {'colors' : true});
    });
    console.log('');
    console.log('<<End error details');
  }
  console.log('');
  console.log('<End test report');
  process.exit(0);
}

_app.runTests();
