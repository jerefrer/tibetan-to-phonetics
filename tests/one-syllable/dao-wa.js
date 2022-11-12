var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Dao-wa',
  tests: [
    { tibetan: 'དབ',    transliteration:   'wa'},
    { tibetan: 'དབང',   transliteration: 'wang'},
    { tibetan: 'དབི',   transliteration:    'i'},
    { tibetan: 'དབུ',   transliteration:    'u'},
    { tibetan: 'དབུས',  transliteration:    'ü'},
    { tibetan: 'དབུག',  transliteration:   'uk'},
    { tibetan: 'དབུལ',  transliteration:   'ül'},
    { tibetan: 'དབུར',  transliteration:   'ur'},
    { tibetan: 'དབུས',  transliteration:    'ü'},
    { tibetan: 'དབེ',   transliteration:    'é'},
    { tibetan: 'དབོ',   transliteration:    'o'},
    { tibetan: 'དབྱ',   transliteration:   'ya'},
    { tibetan: 'དབྱི',  transliteration:   'yi'},
    { tibetan: 'དབྱུ',  transliteration:   'yu'},
    { tibetan: 'དབྱེ',  transliteration:   'yé'},
    { tibetan: 'དབྱོ',  transliteration:   'yo'}
  ]
})