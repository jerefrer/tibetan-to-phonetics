var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Subscribed mono-syllables with prefix and/or superscribed',
  tests: [
    // Yata
    // ==== Rago
    { tibetan: 'དརྐྱ',  converted: 'kya'},
    { tibetan: 'དརྒྱ',  converted: 'gya'},
    { tibetan: 'དརྦྱ',  converted:  'ja'},
    { tibetan: 'དརྨྱ',  converted: 'nya'},
    // ==== Lago
    { tibetan: 'དལྐྱ',  converted: 'kya'},
    { tibetan: 'དལྒྱ',  converted: 'gya'},
    { tibetan: 'དལྤྱ',  converted: 'cha'},
    { tibetan: 'དལྦྱ',  converted:  'ja'},
    // ==== Sago
    { tibetan: 'དསྐྱ',  converted: 'kya'},
    { tibetan: 'དསྒྱ',  converted: 'gya'},
    { tibetan: 'དསྤྱ',  converted: 'cha'},
    { tibetan: 'དསྦྱ',  converted:  'ja'},
    { tibetan: 'དསྨྱ',  converted: 'nya'},
    // === A few of them mixed with vowels
    { tibetan: 'དསྐྱོ',  converted: 'kyo'},
    { tibetan: 'དསྒྱོ',  converted: 'gyo'},
    { tibetan: 'དསྦྱེ',  converted:  'jé'},

    // Rata
    // === Rago
    { tibetan: 'དརྐྲ',  converted: 'tra'},
    { tibetan: 'དརྒྲ',  converted: 'dra'},
    { tibetan: 'དརྟྲ',  converted: 'tra'},
    { tibetan: 'དརྡྲ',  converted: 'dra'},
    { tibetan: 'དརྦྲ',  converted: 'dra'},
    { tibetan: 'དརྨྲ',  converted:  'ma'},
    // === Lago
    { tibetan: 'དལྐྲ',  converted: 'tra'},
    { tibetan: 'དལྒྲ',  converted: 'dra'},
    { tibetan: 'དལྟྲ',  converted: 'tra'},
    { tibetan: 'དལྡྲ',  converted: 'dra'},
    { tibetan: 'དལྦྲ',  converted: 'dra'},
    // === Sago
    { tibetan: 'དསྐྲ',  converted: 'tra'},
    { tibetan: 'དསྒྲ',  converted: 'dra'},
    { tibetan: 'དསྟྲ',  converted: 'tra'},
    { tibetan: 'དསྡྲ',  converted: 'dra'},
    { tibetan: 'དསྦྲ',  converted: 'dra'},
    { tibetan: 'དསྨྲ',  converted:  'ma'},
    // === A few of them mixed with vowels
    { tibetan: 'དརྟྲི',  converted: 'tri'},
    { tibetan: 'དརྡྲི',  converted: 'dri'},
    { tibetan: 'དསྦྲེ',  converted: 'dré'},
    { tibetan: 'དསྒྲོ',  converted: 'dro'}
  ]
})