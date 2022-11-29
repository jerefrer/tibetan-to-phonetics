var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Wasur',
  tests: [
    { tibetan: 'དྭགས',  converted: 'tak'},
    { tibetan: 'དྭངས་',  converted: 'tang'},
    { tibetan: 'དྲྭངས',  converted: 'trang'},
    { tibetan: 'ཁྭ',  converted: "kha"},
    { tibetan: 'ཁྭས',  converted: "khé"},
    { tibetan: 'རྭ',  converted: 'ra'},
    { tibetan: 'རྭས',  converted: 'ré'},
  ]
})
