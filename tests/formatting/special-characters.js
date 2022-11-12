var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Formatting - Special characters',
  tests: '྾྿࿀࿁࿂࿃࿄࿅࿆࿇࿈࿉࿊࿋࿌࿎࿏࿐࿑࿒࿓࿔࿕࿖࿗࿘࿙༄༅༆༇༈༉༊'.split(/(?:)/u).map((char) => {
    return { tibetan: char, transliteration: '' }
  })
})
