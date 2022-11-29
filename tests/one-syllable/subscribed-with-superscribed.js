var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Subscribed mono-syllables with superscribed',
  tests: [
    // Yata
    // ==== Rago
    { tibetan: 'རྐྱ',  converted: 'kya'},
    { tibetan: 'རྒྱ',  converted: 'gya'},
    { tibetan: 'རྦྱ',  converted:  'ja'},
    { tibetan: 'རྨྱ',  converted: 'nya'},
    // ==== Lago
    { tibetan: 'ལྐྱ',  converted: 'kya'},
    { tibetan: 'ལྒྱ',  converted: 'gya'},
    { tibetan: 'ལྤྱ',  converted: 'cha'},
    { tibetan: 'ལྦྱ',  converted:  'ja'},
    // ==== Sago
    { tibetan: 'སྐྱ',  converted: 'kya'},
    { tibetan: 'སྒྱ',  converted: 'gya'},
    { tibetan: 'སྤྱ',  converted: 'cha'},
    { tibetan: 'སྦྱ',  converted:  'ja'},
    { tibetan: 'སྨྱ',  converted: 'nya'},
    // === A few of them mixed with vowels
    { tibetan: 'སྐྱོ',  converted: 'kyo'},
    { tibetan: 'སྒྱོ',  converted: 'gyo'},
    { tibetan: 'སྦྱེ',  converted:  'jé'},

    // Rata
    // === Rago
    { tibetan: 'རྐྲ',  converted: 'tra'},
    { tibetan: 'རྒྲ',  converted: 'dra'},
    { tibetan: 'རྟྲ',  converted: 'tra'},
    { tibetan: 'རྡྲ',  converted: 'dra'},
    { tibetan: 'རྦྲ',  converted: 'dra'},
    { tibetan: 'རྨྲ',  converted:  'ma'},
    // === Lago
    { tibetan: 'ལྐྲ',  converted: 'tra'},
    { tibetan: 'ལྒྲ',  converted: 'dra'},
    { tibetan: 'ལྟྲ',  converted: 'tra'},
    { tibetan: 'ལྡྲ',  converted: 'dra'},
    { tibetan: 'ལྦྲ',  converted: 'dra'},
    // === Sago
    { tibetan: 'སྐྲ',  converted: 'tra'},
    { tibetan: 'སྒྲ',  converted: 'dra'},
    { tibetan: 'སྟྲ',  converted: 'tra'},
    { tibetan: 'སྡྲ',  converted: 'dra'},
    { tibetan: 'སྦྲ',  converted: 'dra'},
    { tibetan: 'སྨྲ',  converted:  'ma'},
    // === A few of them mixed with vowels
    { tibetan: 'རྟྲི',  converted: 'tri'},
    { tibetan: 'རྡྲི',  converted: 'dri'},
    { tibetan: 'སྦྲེ',  converted: 'dré'},
    { tibetan: 'སྒྲོ',  converted: 'dro'}
  ]
})