import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Numbers',
  tests: [
    { tibetan: '༠',  converted:  '0'},
    { tibetan: '༡',  converted:  '1'},
    { tibetan: '༢',  converted:  '2'},
    { tibetan: '༣',  converted:  '3'},
    { tibetan: '༤',  converted:  '4'},
    { tibetan: '༥',  converted:  '5'},
    { tibetan: '༦',  converted:  '6'},
    { tibetan: '༧',  converted:  '7'},
    { tibetan: '༨',  converted:  '8'},
    { tibetan: '༩',  converted:  '9'},
    { tibetan: '༡༠',  converted: '10'},
    { tibetan: '༢༡',  converted: '21'},
    { tibetan: '༢༠༠༠', converted: '2000'},
    { tibetan: '༢༡༢༧', converted: '2127'},
    { tibetan: '༢༠༠༠ ༢༡༢༧ ༣ ༢༡', converted: '2000 2127 3 21'},
    { tibetan: '༡༢༣༤༥', converted: '12345'},
    {
      tibetan: 'ཨོཾ་ཨཱཿཧཱུཾ། ༣ ཧ་ཧོ་ཧྲཱི། ༡', // With spaces
      converted: 'om ah hung 3 ha ho hri 1'
    },
    {
      tibetan: 'ཨོཾ་ཨཱཿཧཱུཾ་༣་ཧ་ཧོ་ཧྲཱི་༡་', // With tsheks
      converted: 'om ah hung 3 ha ho hri 1'
    },
    {
      tibetan: 'ཨོཾ་ཨཱཿཧཱུཾ༣ཧ་ཧོ་ཧྲཱི༡', // With nothing
      converted: 'om ah hung 3 ha ho hri 1'
    },
  ]
})