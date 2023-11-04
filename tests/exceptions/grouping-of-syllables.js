import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Exceptions - Grouping of syllables - 1 syllable',
  exceptions: {
  },
  tests: [
    { tibetan: '', converted: '' },
  ]
})

runTestGroup({
  name: 'Exceptions - Grouping of syllables - 2 syllables',
  exceptions: {
  },
  tests: [
    { tibetan: '', converted: '' },
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
    { tibetan: 'འོད་མཐའ་ཡས་', converted: 'önthayé' },
    { tibetan: 'སྤྱན་རས་གཟིགས་', converted: 'chenrézi' },
    { tibetan: 'ཨཱཿཞེས་ལོངས་སྐུ་འགྲོ་འདུལ་སྤྱན་རས་གཟིགས།', converted: 'ah zhé longku drodül chenré zi' },
    { tibetan: 'སྤྱན་རས་གཟིགས་དབང་མགོན་པོ་བྱམས་པའི་དཔལ། །', converted: 'chenrézi wang gönpo champé pal' },
    { tibetan: 'སྤྱན་རས་གཟིགས་དབང་བསྟ༵ན་འཛི༵ན་རྒྱ༵་མཚོ༵་ཡི། །', converted: 'chenrézi wang tendzin gyamtso yi' },
  ]
})
