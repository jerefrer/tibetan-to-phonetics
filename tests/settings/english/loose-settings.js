var { runTestGroup } = require('../../helpers.js');

runTestGroup({
  name: 'Loose style',
  setting: 'english-loose',
  includeInPercentage: true,
  tests: [

    // End link char (as in pa-o or be-u)
    { tibetan: 'པའོ', converted: "pa'o" },
    { tibetan: 'བེའུ', converted: "bé'u" },

    // Vowels
    { tibetan: 'པའི', converted: 'pé' },

    // Regular consonants
    { tibetan: 'ག', converted: "ga" },
    { tibetan: 'ཇ', converted: "ja" },
    { tibetan: 'ད', converted: "da" },
    { tibetan: 'ཕ', converted: "pa" },
    { tibetan: 'ཚ', converted: "tsa" },
    { tibetan: 'ཞ', converted: "sha" },

    // Ratas
    // 2nd column with rata
    { tibetan: 'ཁྲོལ', converted: "tröl" },
    { tibetan: 'ཕྲོལ', converted: "tröl" },
    // 3rd column with rata
    { tibetan: 'གྲོལ', converted: "dröl" },
    { tibetan: 'བྲོལ', converted: "dröl" },
    { tibetan: 'དྲོལ', converted: "dröl" },

    // Yatas
    { tibetan: 'གྱ', converted: "gya" },
    { tibetan: 'ཕྱ', converted: "cha" },
    { tibetan: 'བྱ', converted: "cha" },

  ]
});
