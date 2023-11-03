var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Subscribed mono-syllables with prefix',
  tests: [
    // Yata
    { tibetan: 'དཀྱ',  converted:  'kya'},
    { tibetan: 'དཁྱ',  converted: 'khya'},
    { tibetan: 'དགྱ',  converted:  'gya'},
    { tibetan: 'དཔྱ',  converted:  'cha'},
    { tibetan: 'དཕྱ',  converted:  'cha'},
    { tibetan: 'དབྱ',  converted:   'ya'},
    { tibetan: 'དམྱ',  converted:  'nya'},
    // Rata
    { tibetan: 'དཀྲ',  converted:  'tra'},
    { tibetan: 'དཁྲ',  converted: "tr'a"},
    { tibetan: 'དགྲ',  converted:  'dra'},
    { tibetan: 'དཏྲ',  converted:  'tra'},
    { tibetan: 'དཐྲ',  converted: "tr'a"},
    { tibetan: 'འདྲ',  converted:  'dra'},
    { tibetan: 'དཔྲ',  converted:  'tra'},
    { tibetan: 'དཕྲ',  converted: "tr'a"},
    { tibetan: 'འབྲ',  converted:  'dra'},
    { tibetan: 'དམྲ',  converted:   'ma'},
    { tibetan: 'དཤྲ',  converted:  'sha'},
    { tibetan: 'དསྲ',  converted:   'sa'},
    { tibetan: 'དཧྲ',  converted:  'hra'},
    // Lata
    { tibetan: 'དཀླ',  converted: 'la'},
    { tibetan: 'དགླ',  converted: 'la'},
    { tibetan: 'དབླ',  converted: 'la'},
    { tibetan: 'དརླ',  converted: 'la'},
    { tibetan: 'དསླ',  converted: 'la'},
    { tibetan: 'དཟླ',  converted: 'da'},
    // A few of them mixed with vowals
    { tibetan: 'དགྲི',  converted: 'dri'},
    { tibetan: 'འདྲོ',  converted: 'dro'},
    { tibetan: 'དབྲེ',  converted: 'dré'},
    { tibetan: 'དཕྱུ',  converted: 'chu'},
    { tibetan: 'དཟླེ',  converted:  'dé'},
    { tibetan: 'དབློ',  converted:  'lo'},
    { tibetan: 'དཧྲུ',  converted: 'hru'}
  ]
})