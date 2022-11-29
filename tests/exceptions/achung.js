var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Exceptions - Achung',
  tests: [
    { tibetan: 'ཧཱུ', converted: 'hu' },
    { tibetan: 'ཧཱུ', converted: 'hu' },
  ]
})