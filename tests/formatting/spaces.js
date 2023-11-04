import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Formatting - Spaces',
  tests: [
    { tibetan: 'སངས་རྒྱས་དང་། །ཆོས།',  converted: 'sang-gyé tang chö' },
    { tibetan: 'ཧཱུྃ༔ ཨོ་རྒྱན་ཡུལ་གྱི་ནུབ་བྱང་མཚམས༔', converted: "hung orgyen yülkyi nupchang tsam" },
    { tibetan: 'ཨེ་མ་ཧོཿ སྤྲོས་བྲལ་ཆོས་ཀྱི་དབྱིངས་ཀྱི་ཞིང་ཁམས་སུ༔ ', converted: "émaho trötral chökyi yingkyi zhingkham su" },
    { tibetan: 'ཀུན་གྱི་རྩེ་མོ་འོད་གསལ་མཆོག་མི་འགྱུར། ', converted: "künkyi tsémo ösal chokmin gyur", pending: true },
    { tibetan: 'བཞིན་དུ་ཚོར་བ་དང་། འདུ་ཤེས་དང་། འདུ་བྱེད་དང་། རྣམ་པར་ཤེས་པ་རྣམས་སྟོང་པའོ། །', converted: "zhintu tsorwa tang dushé tang duché tang nampar shépa namtong pa-o" },
    { tibetan: 'ཡངས་སོ་ཆེའོ་མཁའ་མཉམ་རྒྱལ་བའི་ཐུགས།', converted: "yangso ché-o kha-nyam gyalwé thuk" },
  ]
})

runTestGroup({
  name: 'Formatting - Spaces with capitalization',
  capitalize: true,
  tests: [
    { tibetan: 'སངས་རྒྱས་དང་། །ཆོས།',  converted: 'Sang-gyé tang Chö' },
    { tibetan: 'ཧཱུྃ༔ ཨོ་རྒྱན་ཡུལ་གྱི་ནུབ་བྱང་མཚམས༔', converted: "Hung Orgyen yülkyi nupchang tsam" },
    { tibetan: 'ཨེ་མ་ཧོཿ སྤྲོས་བྲལ་ཆོས་ཀྱི་དབྱིངས་ཀྱི་ཞིང་ཁམས་སུ༔ ', converted: "Émaho Trötral chökyi yingkyi zhingkham su" },
    { tibetan: 'བཞིན་དུ་ཚོར་བ་དང་། འདུ་ཤེས་དང་། འདུ་བྱེད་དང་། རྣམ་པར་ཤེས་པ་རྣམས་སྟོང་པའོ། །', converted: "Zhintu tsorwa tang Dushé tang Duché tang Nampar shépa namtong pa-o" },
  ]
})