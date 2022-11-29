var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Formatting - Chego',
  tests: [
    // Specific cases
    { tibetan: '༸ཞབས་',  converted:  'zhap'},  // With actual Chego
    { tibetan: '༧ཞབས་',  converted:  'zhap'},  // With 7
    { tibetan: '༸སྐྱབས',  converted:  'kyap'}, // With actual Chego
    { tibetan: '༧སྐྱབས',  converted:  'kyap'}, // With 7

    // No specific rules
    { tibetan: '༸སངས་',  converted:  'sang'}, // With actual Chego
    { tibetan: '༸པ་',  converted:  'pa'},    // With actual Chego
  ]
})