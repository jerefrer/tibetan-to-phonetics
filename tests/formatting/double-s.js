var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Formatting - Double S enabled',
  rules: {
    'doubleS': true
  },
  tests: [
    // Double S if ends with vowel and starts with s (but not 'sh')
    { tibetan: 'སོ་སོར་', converted: 'sossor' },
    { tibetan: 'འོད་གསལ་', converted: 'össel' },
    { tibetan: 'རྩ་གསུམ་', converted: 'tsassum' },
    { tibetan: 'དུས་གསུམ་', converted: 'tüssum' },
    { tibetan: 'ཆོས་སྲིད་', converted: 'chössi' },
    { tibetan: 'བརྒྱུད་སྲུང་', converted: 'gyüssung' },

    // A few counter-examples
    // No double S if ends with n and starts with s
    { tibetan: 'ཕུན་སུམ་', converted: "p'ünsum" },
    // No double S if ends with l and starts with s
    { tibetan: 'ཞལ་ཟས་', converted: 'zhelsé' },
    // No double S if ends with r and starts with s
    { tibetan: 'པར་གསུངས་', converted: 'parsung' },
    // No double S if ends with m and starts with s
    { tibetan: 'ལམ་སེལ་', converted: 'lamsel' },
    // No double S if ends with k and starts with s
    { tibetan: 'ཚིགས་སུ་', converted: 'tsiksu' },
    // No double S if ends with g and starts with s
    { tibetan: 'སྣང་སྲིད་', converted: 'nangsi' },
    // No double S if starts with 'sh'
    { tibetan: 'སྨོན་ཤིས་', converted: 'mönshi' },
    // No double S if starts with 'zh'
    { tibetan: 'བརྩོན་ཞིང་', converted: 'tsönzhing' },
  ]
})

runTestGroup({
  name: 'Formatting - Double S disabled',
  rules: {
    'doubleS': false
  },
  tests: [
    // No double S if ends with vowel and starts with s (but not 'sh')
    { tibetan: 'སོ་སོར་', converted: 'sosor' },
    { tibetan: 'འོད་གསལ་', converted: 'ösel' },
    { tibetan: 'རྩ་གསུམ་', converted: 'tsasum' },
    { tibetan: 'དུས་གསུམ་', converted: 'tüsum' },
    { tibetan: 'ཆོས་སྲིད་', converted: 'chösi' },
    { tibetan: 'བརྒྱུད་སྲུང་', converted: 'gyüsung' },
  ]
})
