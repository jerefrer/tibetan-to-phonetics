var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Subscribed mono-syllables',
  tests: [
    // Yata
    { tibetan: 'ཀྱ',  converted: 'kya'},
    { tibetan: 'ཁྱ',  converted: 'khya'},
    { tibetan: 'གྱ',  converted: 'kya'},
    { tibetan: 'པྱ',  converted: 'cha'},
    { tibetan: 'ཕྱ',  converted: 'cha'},
    { tibetan: 'བྱ',  converted: 'cha'},
    { tibetan: 'མྱ',  converted: 'nya'},
    // Rata
    { tibetan: 'ཀྲ',  converted: 'tra'},
    { tibetan: 'ཁྲ',  converted: "tr'a"},
    { tibetan: 'གྲ',  converted: 'tra'},
    { tibetan: 'ཏྲ',  converted: 'tra'},
    { tibetan: 'ཐྲ',  converted: "tr'a"},
    { tibetan: 'དྲ',  converted: 'tra'},
    { tibetan: 'པྲ',  converted: 'tra'},
    { tibetan: 'ཕྲ',  converted: "tr'a"},
    { tibetan: 'བྲ',  converted: 'tra'},
    { tibetan: 'མྲ',  converted: 'ma'},
    { tibetan: 'ཤྲ',  converted: 'sha'},
    { tibetan: 'སྲ',  converted: 'sa'},
    { tibetan: 'ཧྲ',  converted: 'hra'},
    // Lata
    { tibetan: 'ཀླ',  converted: 'la'},
    { tibetan: 'གླ',  converted: 'la'},
    { tibetan: 'བླ',  converted: 'la'},
    { tibetan: 'རླ',  converted: 'la'},
    { tibetan: 'སླ',  converted: 'la'},
    { tibetan: 'ཟླ',  converted: 'da'},
    // A few of them mixed with vowals
    { tibetan: 'གྲི',  converted: 'tri'},
    { tibetan: 'ཕྱུ',  converted: 'chu'},
    { tibetan: 'ཟླེ',  converted: 'dé'},
    { tibetan: 'བློ',  converted: 'lo'},
    { tibetan: 'ཧྲུ',  converted: 'hru'}
  ]
})