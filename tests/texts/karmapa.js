import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Karmapa long-life prayer',
  includeInPercentage: true,
  sentences: true,
  tests: [
    { tibetan: 'འཆི་མེད་རྩ་གསུམ་འདུས་ཞལ་ཨོ་རྒྱན་རྗེའི། །', converted: "chimé tsasum düzhal orgyen jé" },
    { tibetan: 'ཐུགས་རྗེ་འགྲོ་འདུལ་ཕྲིན་ལས་གར་བསྒྱུར་བ། །', converted: "thukjé drodül tr'inlé kargyur wa" },
    { tibetan: 'རྡེ་རྗེ་འཆང་དབང་སྐྱབས་མགོན་ཀརྨ་པའི། །', converted: "déjé changwang kyapgön karma pé" },
    { tibetan: 'ཞབས་པད་བརྟན་ཅིང་མཛད་ཕྲིན་རྒྱས་གྱུར་ཅིག །།', converted: "zhap-pé tenching dzétr'in gyékyur chik" },
  ]
});


