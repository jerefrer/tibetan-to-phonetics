var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Exceptions - Achung',
  tests: [
    { tibetan: 'ཧཱུ', transliteration: 'hu' },
    { tibetan: 'ཧཱུ', transliteration: 'hu' },
  ]
})