var { runTestGroup } = require('../../helpers.js');

runTestGroup({
  name: 'Loose style',
  setting: 'english-loose',
  includeInPercentage: true,
  tests: [

    // End link char (as in pa-o or be-u)
    { tibetan: 'པའོ', converted: "pa'o" },
    { tibetan: 'བེའུ', converted: "pé'u" },

    // Vowals
    { tibetan: 'པའི', converted: 'pé' },

    // Regular consonants
    { tibetan: 'ག', converted: "ka" },
    { tibetan: 'ཇ', converted: "cha" },
    { tibetan: 'ད', converted: "ta" },
    { tibetan: 'ཕ', converted: "pa" },
    { tibetan: 'ཚ', converted: "tsa" },
    { tibetan: 'ཞ', converted: "sha" },

    // Ratas
    // 2nd column with rata
    { tibetan: 'ཁྲོལ', converted: "tröl" },
    { tibetan: 'ཕྲོལ', converted: "tröl" },
    // 3rd column with rata
    { tibetan: 'གྲོལ', converted: "tröl" },
    { tibetan: 'བྲོལ', converted: "tröl" },
    { tibetan: 'དྲོལ', converted: "tröl" },
    // 3rd column with modified rata
    { tibetan: 'སྒྲོལ་', converted: "dröl" },

    // Yatas
    { tibetan: 'གྱ', converted: "kya" },
    { tibetan: 'ཕྱ', converted: "cha" },
    { tibetan: 'བྱ', converted: "cha" },

  ]
});
