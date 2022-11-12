var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Formatting - Chego',
  tests: [
    // Specific cases
    { tibetan: '༸ཞབས་',  transliteration:  'zhap'},  // With actual Chego
    { tibetan: '༧ཞབས་',  transliteration:  'zhap'},  // With 7
    { tibetan: '༸སྐྱབས',  transliteration:  'kyap'}, // With actual Chego
    { tibetan: '༧སྐྱབས',  transliteration:  'kyap'}, // With 7

    // No specific rules
    { tibetan: '༸སངས་',  transliteration:  'sang'}, // With actual Chego
    { tibetan: '༸པ་',  transliteration:  'pa'},    // With actual Chego
  ]
})