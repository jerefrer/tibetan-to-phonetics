var { runTestGroup } = require('../../helpers.js');

runTestGroup({
  name: 'English super loose can be used for loose phonetics matching',
  setting: 'english-super-loose',
  includeInPercentage: true,
  tests: [

    { tibetan: 'ཀེ', converted: 'ge' },
    { tibetan: 'ཀོས', converted: 'go' },
    { tibetan: 'ཀུས', converted: 'gu' },
    { tibetan: 'ཀེམ', converted: 'gem' },
    { tibetan: 'ཀན', converted: 'gen' },
    { tibetan: 'ཀེན', converted: 'gen' },
    { tibetan: 'ཀེར', converted: 'ger' },
    { tibetan: 'ཀེག', converted: 'gek' },
    { tibetan: 'ཀེབ', converted: 'gep' },
    { tibetan: 'ཀལ', converted: 'gel' },
    { tibetan: 'ཀེལ', converted: 'gel' },
    { tibetan: 'ཀེང', converted: 'geng' },
    { tibetan: 'ཀའི', converted: 'ge' },

    // Regular consonants
    { tibetan: 'ཀ', converted: 'ga' },
    { tibetan: 'ཁ', converted: 'ga' },
    { tibetan: 'ག', converted: 'ga' },
    { tibetan: 'ཅ', converted: 'cha' },
    { tibetan: 'ཆ', converted: 'cha' },
    { tibetan: 'ཇ', converted: 'cha' },
    { tibetan: 'ཏ', converted: 'ta' },
    { tibetan: 'ད', converted: 'ta' },
    { tibetan: 'ཐ', converted: 'ta' },
    { tibetan: 'པ', converted: 'pa' },
    { tibetan: 'ཕ', converted: 'pa' },
    { tibetan: 'བ', converted: 'pa' },
    { tibetan: 'ཙ', converted: 'tsa' },
    { tibetan: 'ཚ', converted: 'tsa' },
    { tibetan: 'ཛ', converted: 'tsa' },
    { tibetan: 'ཕ', converted: 'pa' },
    { tibetan: 'ཞ', converted: 'sha' },

    // Modified consonants (with prefix or superscribed)
    { tibetan: 'རྒ', converted: 'ga' },
    { tibetan: 'རྗ', converted: 'cha' },
    { tibetan: 'རྡ', converted: 'ta' },
    { tibetan: 'རྦ', converted: 'pa' },
    { tibetan: 'བཟའ', converted: 'sa' },

    // Ratas
    { tibetan: 'ཏྲ', converted: 'tra' },
    { tibetan: 'ཁྲ', converted: 'tra' },
    { tibetan: 'བྲ', converted: 'tra' },
    { tibetan: 'སྒྲ', converted: 'tra' },
    { tibetan: 'ཧྲ', converted: 'hra' },

    // Yatas
    { tibetan: 'ཀྱ', converted: 'ga' },
    { tibetan: 'ཁྱ', converted: 'ga' },
    { tibetan: 'གྱ', converted: 'ga' },
    { tibetan: 'ཀྱི', converted: 'gi' },
    { tibetan: 'ཁྱི', converted: 'gi' },
    { tibetan: 'གྱི', converted: 'gi' },
    { tibetan: 'སྒྱ', converted: 'ga' },
    { tibetan: 'པྱ', converted: 'cha' },
    { tibetan: 'ཕྱ', converted: 'cha' },
    { tibetan: 'བྱ', converted: 'cha' },
    { tibetan: 'སྦྱ', converted: 'cha' },
    { tibetan: 'དབྱ', converted: 'ya' },

    // Latas
    { tibetan: 'གླ', converted: 'la' },
    { tibetan: 'ཟླ', converted: 'ta' },

    // Special cases
    { tibetan: 'ལྷ', converted: 'la' },
    { tibetan: 'དགའ་བ་', converted: 'gapa' },
  ]
});

runTestGroup({
  name: 'English super loose can be used for loose phonetics matching with syllables merging',
  setting: 'english-super-loose',
  rules: {
    endEqualsStart: 'merge',
  },
  includeInPercentage: true,
  tests: [
    { tibetan: 'སངས་རྒྱས་', converted: 'sange' },
  ]
});
