import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Exceptions - With modifiers',
  tests: [
    { tibetan: 'པདྨའི་', converted: 'padmé' },
    { tibetan: 'པདྨས་', converted: 'padmé' },
    { tibetan: 'པདྨར་', converted: 'padmar' },
    { tibetan: 'པདྨའོ་', converted: 'padma-o' },

    { tibetan: 'པདྨོའི་', converted: 'padmö' },
    { tibetan: 'པདྨོས་', converted: 'padmö' },
    { tibetan: 'པདྨོར་', converted: 'padmor' },

    { tibetan: 'མཁའ་འགྲོའི་', converted: 'khandrö' },
    { tibetan: 'མཁའ་འགྲོས་', converted: 'khandrö' },
    { tibetan: 'མཁའ་འགྲོར་', converted: 'khandror' },

    { tibetan: 'ཌཱཀྐི་', converted: 'daki' },
    { tibetan: 'ཌཱཀྐིའི་', converted: 'daki' },
    { tibetan: 'ཌཱཀྐིའོ་', converted: 'daki-o' },

    { tibetan: 'ཨ་ཏིས་', converted: 'ati' },

    { tibetan: 'མཉྫུ་གྷོ་ཥས་', converted: 'manjugoshé'},
  ]
})

runTestGroup({
  name: 'Exceptions - With modifiers - Ending with a - Defined in phonetics',
  exceptions: {
    'དྷརྨ': 'dhar_ma',
  },
  tests: [
    { tibetan: 'དྷརྨ་', converted: 'dharma' },
    { tibetan: 'དྷརྨའི་', converted: 'dharmé' },
    { tibetan: 'དྷརྨས་', converted: 'dharmé' },
    { tibetan: 'དྷརྨར་', converted: 'dharmar' },
    { tibetan: 'དྷརྨའོ་', converted: 'dharma-o' },
  ]
})

runTestGroup({
  name: 'Exceptions - With modifiers - Ending with a - Defined in tibetan',
  exceptions: {
    'དྷརྨ': 'དྷར་མ',
  },
  tests: [
    { tibetan: 'དྷརྨ་', converted: 'dharma' },
    { tibetan: 'དྷརྨའི', converted: 'dharmé' },
    { tibetan: 'དྷརྨས་', converted: 'dharmé' },
    { tibetan: 'དྷརྨར་', converted: 'dharmar' },
    { tibetan: 'དྷརྨའོ་', converted: 'dharma-o' },
  ]
})

runTestGroup({
  name: 'Exceptions - With modifiers - Ending with e - Defined in phonetics',
  exceptions: {
    'རྡོ་རྗེ': 'dor_jé',
  },
  tests: [
    { tibetan: 'རྡོ་རྗེ་', converted: 'dorjé' },
    { tibetan: 'རྡོ་རྗེའི་', converted: 'dorjé' },
    { tibetan: 'རྡོ་རྗེས་', converted: 'dorjé' },
    { tibetan: 'རྡོ་རྗེར་', converted: 'dorjer' },
    { tibetan: 'རྡོ་རྗེའོ་', converted: 'dorjé-o' },
  ]
})

runTestGroup({
  name: 'Exceptions - With modifiers - Ending with e - Defined in tibetan',
  exceptions: {
    'རྡོ་རྗེ': 'རྡོར་རྗེ',
  },
  tests: [
    { tibetan: 'རྡོ་རྗེ་', converted: 'dorjé' },
    { tibetan: 'རྡོ་རྗེའི་', converted: 'dorjé' },
    { tibetan: 'རྡོ་རྗེས་', converted: 'dorjé' },
    { tibetan: 'རྡོ་རྗེར་', converted: 'dorjer' },
    { tibetan: 'རྡོ་རྗེའོ་', converted: 'dorjé-o' },
  ]
})