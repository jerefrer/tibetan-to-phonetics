import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Exceptions - Wasur',
  tests: [
    { tibetan: 'དྭ', converted: 'ta' },
    { tibetan: 'ལྭ', converted: 'la' },
    { tibetan: 'ལྷྭ', converted: 'lha' },
    // With bad encoding
    { tibetan: '', converted: 'lha' },
  ]
})
