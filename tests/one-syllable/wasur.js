var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Wasur',
  tests: [
    { tibetan: 'དྭགས',  transliteration: 'tak'},
    { tibetan: 'དྭངས་',  transliteration: 'tang'},
    { tibetan: 'དྲྭངས',  transliteration: 'trang'},
    { tibetan: 'ཁྭ',  transliteration: "kha"},
    { tibetan: 'ཁྭས',  transliteration: "khé"},
    { tibetan: 'རྭ',  transliteration: 'ra'},
    { tibetan: 'རྭས',  transliteration: 'ré'},
  ]
})
