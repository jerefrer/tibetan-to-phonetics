import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'HHDL long-life prayer by Shabkar',
  includeInPercentage: true,
  sentences: true,
  tests: [
    { tibetan: '༈ སྟོང་ཉིད་སྙིང་རྗེ་ཟུང་དུ་འཇུག་པའི་ལམ། །', converted: "tong-nyi nyingjé sungtu jukpé lam" },
    { tibetan: 'ཆེས་ཆེར་གསལ་མཛད་གངས་ཅན་བསྟན་འགྲོའི་མགོན། །', converted: "chécher saldzé kangchen tendrö gön" },
    { tibetan: 'ཕྱག་ན་པདྨོ་བསྟན་འཛིན་རྒྱ་མཚོ་ལ། །', converted: "chakna padmo tendzin gyamtso la" },
    { tibetan: 'གསོལ་བ་འདེབས་སོ་བཞེད་དོན་ལྷུན་གྲུབ་ཤོག།', converted: "sölwa depso zhétön lhüntrup sho" },
  ]
});
