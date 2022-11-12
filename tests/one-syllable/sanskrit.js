var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Sanskrit letters',
  tests: [
    { tibetan: 'ཌི',    transliteration:   'di'},
    { tibetan: 'ཊི',    transliteration:   'ti'},
  ]
})