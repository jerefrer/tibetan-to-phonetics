import { runTestGroup } from '../helpers.js';

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
    { tibetan: 'གདལ་བའོ་', converted: 'dalwa-o' },
    { tibetan: 'ངོ་བོས་', converted: 'ngowö' },
    { tibetan: 'སྤྱི་བོའི་', converted: 'chiwö' },
    { tibetan: 'འབྲས་བུ', converted: 'drépu' },
    { tibetan: 'འབྲས་བུའི', converted: 'drépü' },

    // End of line
    { tibetan: 'དཔལ་འཕེལ་བ་', converted: "palp'el wa" },
    { tibetan: 'དཔལ་འཕེལ་བས་', converted: "palp'el wé" },
    { tibetan: 'དཔལ་འཕེལ་བའི་', converted: "palp'el wé" },
    { tibetan: 'དཔལ་འཕེལ་བོ་', converted: "palp'el wo" },
    { tibetan: 'དཔལ་འཕེལ་བོས་', converted: "palp'el wö" },
    { tibetan: 'དཔལ་འཕེལ་བར་', converted: "palp'el war" },
    { tibetan: 'དཔལ་འཕེལ་བོད་', converted: "palp'el pö" },
  ]
})