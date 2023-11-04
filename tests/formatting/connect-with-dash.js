import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Formatting - Connect with dash for readability',
  tests: [
    // Dash if first ends and second starts with vowal
    { tibetan: 'བའི་འོས', converted: 'pé-ö' },
    { tibetan: 'ས་འམ་', converted: 'sa-am' },
    // Or a followed by n
    { tibetan: 'མ་ཪྙེད་', converted: 'ma-nyé' },
    { tibetan: 'མ་མངོན་', converted: 'ma-ngön' },
    // Or o followed by n
    { tibetan: 'མོ་སྣང་', converted: 'mo-nang' },
    { tibetan: 'ལོ་ཉེས་', converted: 'lo-nyé' },
    // Or g followed by n
    { tibetan: 'བསང་སྣ་', converted: 'sang-na' },
    { tibetan: 'གསང་སྔགས་', converted: 'sang-ngak' },

    // A few counter-examples
    // No dash if ends with and starts with other consonants
    { tibetan: 'སྒྲོལ་མ', converted: 'drölma' },
    // No dash if a followed by g
    { tibetan: 'བརྡ་བརྒྱུད་', converted: 'dagyü' },
    // No dash if o followed by g
    { tibetan: 'འདོད་དགུའི་', converted: 'dögü' },
    // No dash if k followed by n
    { tibetan: 'ལེགས་བསྣམས་', converted: 'leknam' },
  ]
})
