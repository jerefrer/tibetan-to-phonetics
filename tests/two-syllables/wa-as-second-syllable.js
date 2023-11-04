import { runTestGroup } from '../helpers.js';

/*

  Rules found in Gilbert BUÉSO's "Parlons Tibétain":

    p.94:
      When BA is the last syllable of a word, it's pronounced WA.

    p.135:
      The rules for adding the suffix of infinitive to a verb are as follows:
        If the root ends with nga / 'a / ra / la then the suffix is BA
        If not the suffix is PA

  This leads to the question:
  When a BA follows something alse than these four suffixes,
  Does it necessarily mean that it is not part of the previous word,
  And therefore should be transcribed as PA?

*/

runTestGroup({
  name: 'Wa as second syllable - First syllable ending with ra should yiald Wa',
  tests: [
    { tibetan: 'འཕིར་བ་',  converted: "p'irwa" },
    { tibetan: 'བར་བ་',  converted: 'parwa' },
    { tibetan: 'བར་བར་',  converted: 'parwar' },
    { tibetan: 'བར་བའོ་',  converted: 'parwa-o' },
    { tibetan: 'བར་བོ་', converted: 'parwo' },
    { tibetan: 'བར་བོར་', converted: 'parwor' },
    { tibetan: 'བར་བོས་', converted: 'parwö' },
    { tibetan: 'བར་བས་',  converted: 'parwé' },
    { tibetan: 'བར་བའི་', converted: 'parwé' },
    { tibetan: 'བར་བའམ་', converted: 'parwa-am' },
    { tibetan: 'བར་བའང་', converted: 'parwa-ang' },
  ]
})

runTestGroup({
  name: 'Wa as second syllable - First syllable ending with nga should yiald Wa',
  tests: [
    { tibetan: 'གནང་བ་',  converted: 'nangwa' },
  ]
})


runTestGroup({
  name: "Wa as second syllable - First syllable ending with 'a should yiald Wa",
  tests: [
    { tibetan: 'དཀའ་བ་',  converted: 'kawa' },
  ]
})


runTestGroup({
  name: 'Wa as second syllable - First syllable ending with la should yiald Wa',
  tests: [
    { tibetan: 'མཇལ་བ་',  converted: 'jalwa' },
  ]
})


runTestGroup({
  name: 'Wa as second syllable - First syllable ending with no suffix should yiald Wa',
  tests: [
    { tibetan: 'འགྲོ་བ་',  converted: 'drowa' },
  ]
})

// Trying to cover this one actually generates many inaccurate converteds
// in other weird cases, and it might not be necessary at all. See question above.
//
// runTestGroup({
//   name: 'Wa as second syllable - First syllable ending with anything alse should yiald Pa',
//   tests: [
//     { tibetan: 'བྱེད་བ་',  converted: 'chépa' },
//   ]
// })
