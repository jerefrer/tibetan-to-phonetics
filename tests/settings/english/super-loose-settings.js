var { runTestGroup } = require('../../helpers.js');

runTestGroup({
  name: 'English super loose can be used for loose phonetics matching',
  setting: 'english-super-loose',
  includeInPercentage: true,
  tests: [

    { tibetan: 'ཀེ', converted: 'ke' },
    { tibetan: 'ཀོས', converted: 'ko' },
    { tibetan: 'ཀུས', converted: 'ku' },
    { tibetan: 'ཀེམ', converted: 'kem' },
    { tibetan: 'ཀན', converted: 'ken' },
    { tibetan: 'ཀེན', converted: 'ken' },
    { tibetan: 'ཀེར', converted: 'ker' },
    { tibetan: 'ཀེག', converted: 'kek' },
    { tibetan: 'ཀེབ', converted: 'kep' },
    { tibetan: 'ཀལ', converted: 'kel' },
    { tibetan: 'ཀེལ', converted: 'kel' },
    { tibetan: 'ཀེང', converted: 'keng' },
    { tibetan: 'ཀའི', converted: 'ke' },

    // Regular consonants
    { tibetan: 'ཀ', converted: 'ka' },
    { tibetan: 'ཁ', converted: 'ka' },
    { tibetan: 'ག', converted: 'ka' },
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
    { tibetan: 'རྒ', converted: 'ka' },
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
    { tibetan: 'ཀྱ', converted: 'ka' },
    { tibetan: 'ཁྱ', converted: 'ka' },
    { tibetan: 'གྱ', converted: 'ka' },
    { tibetan: 'ཀྱི', converted: 'ki' },
    { tibetan: 'ཁྱི', converted: 'ki' },
    { tibetan: 'གྱི', converted: 'ki' },
    { tibetan: 'སྒྱ', converted: 'ka' },
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
    { tibetan: 'དགའ་བ་', converted: 'kapa' },
  ]
});
