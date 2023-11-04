import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Sanskrit letters',
  tests: [
    { tibetan: 'ཌི',    converted:   'di'},
    { tibetan: 'ཊི',    converted:   'ti'},
  ]
})