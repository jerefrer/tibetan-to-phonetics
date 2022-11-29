var { runTestGroup } = require('../../helpers.js');

runTestGroup({
  name: 'French settings',
  setting: 'french',
  includeInPercentage: true,
  tests: [

    // Vowels
    { tibetan: 'འུ', converted: 'ou' },
    { tibetan: 'འུས', converted: 'u' },
    { tibetan: 'འོས', converted: 'eu' },
    { tibetan: 'པའི', converted: 'pé' },

    // Regular consonants
    { tibetan: 'ཅ', converted: 'tcha' },
    { tibetan: 'ཆ', converted: "tch'a" },
    { tibetan: 'ཇ', converted: 'dja' },
    { tibetan: 'ཐ', converted: "t'a" },
    { tibetan: 'བ', converted: 'pa' },
    { tibetan: 'ཚ', converted: "ts'a" },
    { tibetan: 'ཟ', converted: 'sa' },
    { tibetan: 'ཤ', converted: 'cha' },
    { tibetan: 'ཞ', converted: 'sha' },

    // Modified consonants (with prefix or superscribed)
    { tibetan: 'རྗ', converted: 'dja' },
    { tibetan: 'རྒ', converted: 'ga' },

    // Ratas
    // 2nd column with rata
    { tibetan: 'ཁྲ', converted: "t'ra" },
    { tibetan: 'ཕྲ', converted: "t'ra" },

    // Yatas
    { tibetan: 'རྒྱ', converted: 'guia' },
    { tibetan: 'པྱ', converted: 'tcha' },
    { tibetan: 'ཕྱ', converted: "tch'a" },
    { tibetan: 'བྱ', converted: "tch'a" },

  ]
});
