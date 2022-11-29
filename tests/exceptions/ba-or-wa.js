var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Exceptions - Ba or Wa',
  tests: [
    // First syllable
    { tibetan: 'བ་', converted: 'pa' },
    { tibetan: 'བས་', converted: 'pé' },
    { tibetan: 'བའི་', converted: 'pé' },
    { tibetan: 'བོ་', converted: 'po' },
    { tibetan: 'བའོ་', converted: 'pa-o' },
    { tibetan: 'བོད་', converted: 'pö' },
    { tibetan: 'བོས་', converted: 'pö' },
    { tibetan: 'བར་', converted: 'par' },

    // Second syllable
    { tibetan: 'ཉེ་བར་', converted: 'nyéwar' },
    { tibetan: 'ཉོ་བ་', converted: 'nyowa' },
    { tibetan: 'ཉོ་བས་', converted: 'nyowé' },
    { tibetan: 'ཉོ་བའི་', converted: 'nyowé' },
    { tibetan: 'གདལ་བའོ་', converted: 'delwa-o' },
    { tibetan: 'ངོ་བོས་', converted: 'ngowö' },
    { tibetan: 'སྤྱི་བོའི་', converted: 'chiwö' },
    { tibetan: 'འབྲས་བུ', converted: 'drépu' },
    { tibetan: 'འབྲས་བུའི', converted: 'drépü' },

    // End of line
    { tibetan: 'དཔལ་འཕེལ་བ་', converted: "pelp'el wa" },
    { tibetan: 'དཔལ་འཕེལ་བས་', converted: "pelp'el wé" },
    { tibetan: 'དཔལ་འཕེལ་བའི་', converted: "pelp'el wé" },
    { tibetan: 'དཔལ་འཕེལ་བོ་', converted: "pelp'el wo" },
    { tibetan: 'དཔལ་འཕེལ་བོས་', converted: "pelp'el wö" },
    { tibetan: 'དཔལ་འཕེལ་བར་', converted: "pelp'el war" },
    { tibetan: 'དཔལ་འཕེལ་བོད་', converted: "pelp'el pö" },
  ]
})