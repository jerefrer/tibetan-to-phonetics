import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Formatting - Special characters',
  tests: '྾྿࿀࿁࿂࿃࿄࿅࿆࿇࿈࿉࿊࿋࿌࿎࿏࿐࿑࿒࿓࿔࿕࿖࿗࿘࿙༄༅༆༇༈༉༊'.split(/(?:)/u).map((char) => {
    return { tibetan: char, converted: '' }
  })
})
