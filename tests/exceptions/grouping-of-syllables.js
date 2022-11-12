var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Exceptions - Grouping of syllables - 1 syllable',
  exceptions: {
  },
  tests: [
    { tibetan: '', transliteration: '' },
  ]
})

runTestGroup({
  name: 'Exceptions - Grouping of syllables - 2 syllables',
  exceptions: {
  },
  tests: [
    { tibetan: '', transliteration: '' },
  ]
})

runTestGroup({
  pending: true,
  name: 'Exceptions - Grouping of syllables - 3 syllables',
  exceptions: {
    'སྤྱན་རས་གཟིགས': 'སྤྱན་རས་གཟི',
    'ཚེ་དཔག་མེད': 'ཚེ་པ་མེད',
  },
  tests: [
    { tibetan: 'འོད་མཐའ་ཡས་', transliteration: 'öntha yé' },
    { tibetan: 'སྤྱན་རས་གཟིགས་', transliteration: 'chenré zi' },
    { tibetan: 'ཨཱཿཞེས་ལོངས་སྐུ་འགྲོ་འདུལ་སྤྱན་རས་གཟིགས།', transliteration: 'ah zhé longku drodül chenré zi' },
    { tibetan: 'སྤྱན་རས་གཟིགས་དབང་མགོན་པོ་བྱམས་པའི་དཔལ། །', transliteration: 'chenré ziwang gönpo champé pel' },
  ]
})
