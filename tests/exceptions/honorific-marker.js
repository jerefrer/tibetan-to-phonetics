var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Exceptions - Honorific marker',
  tests: [
    { tibetan: 'འཇི༵གས་མེ༵ད་', converted: 'jikmé' },
    { tibetan: 'མཁྱེ༵ན་བརྩེ༵འི་', converted: 'khyentsé' },
    { tibetan: 'ནུས༵་ལྡན༵་', converted: 'nüden' },
    { tibetan: 'རྡོ༵་རྗེ༵་', converted: 'dorjé' },

    { tibetan: '༸ཞབས་', converted: 'zhap' },
  ]
})