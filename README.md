# A simple Test Rummer

## Setup

### Prerequizites:
- Node.js LTS installed

### Configuring the project
After cloning the repo, add the JS files that you need to test into *app* folder and replace the tests in *test/unit.js* file.
You may also create different test modules like *test/unit.js* and import them to *test/index.js* like so:

```JavaScript
_app.tests.unit = require('.//*the name of the test module*/');
```
## Usage
Run **node test** while in the project directory in terminal.
