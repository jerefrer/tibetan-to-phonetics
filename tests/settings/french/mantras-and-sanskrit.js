var { runTestGroup } = require('../../helpers.js');

runTestGroup({
  name: 'Exceptions - Mantras and Sanskrit in French',
  setting: 'french',
  tests: [
    { tibetan: 'ཧཱུཾ', converted: 'houng' },
    { tibetan: 'ཧཱུྃ', converted: 'houng' },
    { tibetan: 'ཧཱུྂ', converted: 'houng' },

    { tibetan: 'ༀ་ཨཱཿཧཱུྃ', converted: 'om ah houng' },
    { tibetan: 'ཨོཾ་ཨཱཿཧཱུཾ།', converted: 'om ah houng' },

    { tibetan: 'ཨ་ཏི་པཱུ་ཧོཿ', converted: 'atipou ho' },
    { tibetan: 'མ་ཧཱ་སརྦ་པཱུ་ཛ་ཁཱ་ཧི༔', converted: 'maha sarwa pouja khahi' },

    { tibetan: 'སརྦ་བ་སུ་དེ་ཝ་', converted: 'sarwa wasou déwa' },
    { tibetan: 'ནཱི་དྷི་པ་ཏི་བྷཱུ་མི་པ་ཏི་', converted: 'nidhipati bhoumipati' },

    {
      tibetan: 'ཨོཾ་ཨཱཿཧཱུྃ་བཛྲ་གུ་རུ་པདྨ་ས་པ་རི་ཝཱ་ར་ཨི་དཾ་བ་ལིཾ་ཏ་ཁ་ཁ་ཁཱ་ཧི་ཁཱ་ཧི།',
      converted: 'om ah houng vajra gourou padma sapariwara idam balingta kha kha khahi khahi'
    },
    {
      tibetan: 'ཨོཾ་བཛྲ་ཨརྒྷཾ་པཱ་དྱཾ་པུཥྤེ་དྷཱུ་པེ་ཨཱ་ལོ་ཀེ་གནྡྷེ་ནཻ་ཝི་དྱ་ཤཔྡ་པྲ་ཏཱིཙྪ་ཡེ་སྭཱ་ཧཱ།',
      converted: 'om vajra argham padyam poushpé dhoupé aloké gandhé naiwindyé shapta pratitsayé svaha'
    },
    {
      tibetan: 'ན་མཿ སརྦ་ཏ་ཐཱ་ག་ཏ་བྷྱོཿབི་ཤྭ་མུ་ཁེ་བྷྱཿ སརྦ་ཐཱ་ཁཾ་ཨུདྒཏེ་སྥ་ར་ཎ་ཨི་མཾ་ག་ག་ན་ཁཾ་སྭཱ་ཧཱཿ',
      converted: "nama sarwa tathagata bayo bishou moukébé sarwa t'akham outgaté saparana imam gagana kham svaha"
    },

  ]
})
