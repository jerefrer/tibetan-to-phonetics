var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'The Seven Diamond Verses',
  includeInPercentage: true,
  sentences: true,
  tests: [
    { tibetan: 'ཧཱུྃ༔', converted: "hung" },
    { tibetan: 'ཨོ་རྒྱན་ཡུལ་གྱི་ནུབ་བྱང་མཚམས༔', converted: "orgyen yülkyi nupchang tsam" },
    { tibetan: 'པདྨ་གེ་སར་སྡོང་པོ་ལ༔', converted: "padma késar dongpo la" },
    { tibetan: 'ཡ་མཚན་མཆོག་གི་དངོས་གྲུབ་བཪྙེས༔', converted: "yamtsen chok-ki ngötrup nyé" },
    { tibetan: 'པདྨ་འབྱུང་གནས་ཞེས་སུ་གྲགས༔', converted: "padma jung-né zhésu trak" },
    { tibetan: 'འཁོར་དུ་མཁའ་འགྲོ་མང་པོས་བསྐོར༔', converted: "khortu khandro mangpö kor" },
    { tibetan: 'ཁྱེད་ཀྱི་རྗེས་སུ་བདག་བསྒྲུབ་ཀྱིས༔', converted: "khyékyi jésu dadrup kyi" },
    { tibetan: 'བྱིན་གྱིས་བརླབ་ཕྱིར་གཤེགས་སུ་གསོལ༔', converted: "chinkyi lapchir sheksu söl" },
    { tibetan: 'གུ་རུ་པདྨ་སིདྡྷི་ཧཱུྃ༔', converted: "guru padma siddhi hung" }
 ]
})