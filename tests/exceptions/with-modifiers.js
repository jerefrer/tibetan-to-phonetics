var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Exceptions - With modifiers',
  tests: [
    { tibetan: 'པདྨའི་', transliteration: 'padmé' },
    { tibetan: 'པདྨས་', transliteration: 'padmé' },
    { tibetan: 'པདྨར་', transliteration: 'padmar' },
    { tibetan: 'པདྨའོ་', transliteration: 'padma-o' },

    { tibetan: 'པདྨོའི་', transliteration: 'padmö' },
    { tibetan: 'པདྨོས་', transliteration: 'padmö' },
    { tibetan: 'པདྨོར་', transliteration: 'padmor' },

    { tibetan: 'མཁའ་འགྲོའི་', transliteration: 'khandrö' },
    { tibetan: 'མཁའ་འགྲོས་', transliteration: 'khandrö' },
    { tibetan: 'མཁའ་འགྲོར་', transliteration: 'khandror' },

    { tibetan: 'ཌཱཀྐི་', transliteration: 'daki' },
    { tibetan: 'ཌཱཀྐིའི་', transliteration: 'daki' },
    { tibetan: 'ཌཱཀྐིའོ་', transliteration: 'daki-o' },

    { tibetan: 'ཨ་ཏིས་', transliteration: 'ati' },

    { tibetan: 'མཉྫུ་གྷོ་ཥས་', transliteration: 'manjugoshé'},
  ]
})

runTestGroup({
  name: 'Exceptions - With modifiers - Ending with a - Defined in phonetics',
  exceptions: {
    'དྷརྨ': 'dhar_ma',
  },
  tests: [
    { tibetan: 'དྷརྨ་', transliteration: 'dharma' },
    { tibetan: 'དྷརྨའི་', transliteration: 'dharmé' },
    { tibetan: 'དྷརྨས་', transliteration: 'dharmé' },
    { tibetan: 'དྷརྨར་', transliteration: 'dharmar' },
    { tibetan: 'དྷརྨའོ་', transliteration: 'dharma-o' },
  ]
})

runTestGroup({
  name: 'Exceptions - With modifiers - Ending with a - Defined in tibetan',
  exceptions: {
    'དྷརྨ': 'དྷར་མ',
  },
  tests: [
    { tibetan: 'དྷརྨ་', transliteration: 'dharma' },
    { tibetan: 'དྷརྨའི', transliteration: 'dharmé' },
    { tibetan: 'དྷརྨས་', transliteration: 'dharmé' },
    { tibetan: 'དྷརྨར་', transliteration: 'dharmar' },
    { tibetan: 'དྷརྨའོ་', transliteration: 'dharma-o' },
  ]
})

runTestGroup({
  name: 'Exceptions - With modifiers - Ending with e - Defined in phonetics',
  exceptions: {
    'རྡོ་རྗེ': 'dor_jé',
  },
  tests: [
    { tibetan: 'རྡོ་རྗེ་', transliteration: 'dorjé' },
    { tibetan: 'རྡོ་རྗེའི་', transliteration: 'dorjé' },
    { tibetan: 'རྡོ་རྗེས་', transliteration: 'dorjé' },
    { tibetan: 'རྡོ་རྗེར་', transliteration: 'dorjer' },
    { tibetan: 'རྡོ་རྗེའོ་', transliteration: 'dorjé-o' },
  ]
})

runTestGroup({
  name: 'Exceptions - With modifiers - Ending with e - Defined in tibetan',
  exceptions: {
    'རྡོ་རྗེ': 'རྡོར་རྗེ',
  },
  tests: [
    { tibetan: 'རྡོ་རྗེ་', transliteration: 'dorjé' },
    { tibetan: 'རྡོ་རྗེའི་', transliteration: 'dorjé' },
    { tibetan: 'རྡོ་རྗེས་', transliteration: 'dorjé' },
    { tibetan: 'རྡོ་རྗེར་', transliteration: 'dorjer' },
    { tibetan: 'རྡོ་རྗེའོ་', transliteration: 'dorjé-o' },
  ]
})