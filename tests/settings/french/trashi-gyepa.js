var { runTestGroup } = require('../../helpers.js');

runTestGroup({
  name: 'French — Trashi Gyepa',
  setting: 'french',
  includeInPercentage: true,
  sentences: true,
  tests: [
    { tibetan: 'ༀ།', converted: "om" },
    { tibetan: 'སྣང་སྲིད་རྣམ་དག་རང་བཞིན་ལྷུན་གྲུབ་པའི། །', converted: "nangsi namtak rangshin lhuntroup pé" },
    { tibetan: 'བཀྲ་ཤིས་ཕྱོགས་བཅུའི་ཞིང་ན་བཞུགས་པ་ཡི། །', converted: "trachi tch'oktchu shing-na shoukpa yi" },
    { tibetan: 'སངས་རྒྱས་ཆོས་དང་དགེ་འདུན་འཕགས་པའི་ཚོགས། །', converted: "sang-guié tch'eutang guendun p'akpé ts'ok" },
    { tibetan: 'ཀུན་ལ་ཕྱག་འཚལ་བདག་ཅག་བཀྲ་ཤིས་ཤོག །', converted: "kunla tch'akts'al datchak trachi cho" },
    { tibetan: 'སྒྲོལ་མའི་རྒྱལ་པོ་རྩལ་བརྟན་དོན་གྲུབ་དགོངས། །', converted: "dreulmé guialpo tsalten teuntroup gong" },
    { tibetan: 'བྱམས་པའི་རྒྱན་དཔལ་དགེ་གྲགས་དཔལ་དམ་པ། །', converted: "tch'ampé guienpal guétrak paltam pa" },
    { tibetan: 'ཀུན་ལ་དགོངས་པ་རྒྱ་ཆེར་གྲགས་པ་ཅན། །', converted: "kunla gongpa guiatch'er trakpa tchen" },
    { tibetan: 'ལྷུན་པོ་ལྟར་འཕགས་རྩལ་གྲགས་དཔལ་དང་ནི། །', converted: "lhunpo tarp'ak tsaltrak paltang ni" },
    { tibetan: 'སེམས་ཅན་ཐམས་ཅད་ལ་དགོངས་གྲགས་པའི་དཔལ། །', converted: "semtchen t'amtché lagong trakpé pal" },
    { tibetan: 'ཡིད་ཚིམ་མཛད་པ་རྩལ་རབ་གྲགས་དཔལ་ཏེ། །', converted: "yits'im dzépa tsalrap trakpal té" },
    { tibetan: 'མཚན་ཙམ་ཐོས་པས་བཀྲ་ཤིས་དཔལ་འཕེལ་བ། །', converted: "ts'entsam t'eupé trachi palp'el wa" },
    { tibetan: 'བདེ་བར་གཤེགས་པ་བརྒྱད་ལ་ཕྱག་འཚལ་ལོ། །', converted: "déwar chekpa guiéla tch'akts'al lo" },
    { tibetan: 'འཇམ་དཔལ་གཞོན་ནུ་དཔལ་ལྡན་རྡོ་རྗེ་འཛིན། །', converted: "djampal sheun-nou palden dordjé dzin" },
    { tibetan: 'སྤྱན་རས་གཟིགས་དབང་མགོན་པོ་བྱམས་པའི་དཔལ། །', converted: "tchenré ziwang gueunpo tch'ampé pal", pending: true },
    { tibetan: 'ས་ཡི་སྙིང་པོ་སྒྲིབ་པ་རྣམ་པར་སེལ། །', converted: "sayi nyingpo drip-pa nampar sel" },
    { tibetan: 'ནམ་མཁའི་སྙིང་པོ་འཕགས་མཆོག་ཀུན་ཏུ་བཟང་། །', converted: "namkhé nyingpo p'aktch'ok kuntou zang" },
    { tibetan: 'ཨུཏྤལ་རྡོ་རྗེ་པད་དཀར་ཀླུ་ཤིང་དང་། །', converted: "outpal dordjé pékar louching tang" },
    { tibetan: 'ནོར་བུ་ཟླ་བ་རལ་གྲི་ཉི་མ་ཡི། །', converted: "norpou dawa raltri nyima yi" },
    { tibetan: 'ཕྱག་མཚན་ལེགས་བསྣམས་བཀྲ་ཤིས་དཔལ་གྱི་མཆོག །', converted: "tch'akts'en leknam trachi palkyi tch'ok" },
    { tibetan: 'བྱང་ཆུབ་སེམས་དཔའ་བརྒྱད་ལ་ཕྱག་འཚལ་ལོ། །', converted: "tch'angtch'oup sempa guiéla tch'akts'al lo" },
    { tibetan: 'རིན་ཆེན་གདུགས་མཆོག་བཀྲ་ཤིས་གསེར་གྱི་ཉ། །', converted: "rintch'en douktch'ok trachi serkyi nya" },
    { tibetan: 'འདོད་འབྱུང་བུམ་བཟང་ཡིད་འོང་ཀ་མ་ལ། །', converted: "deudjoung poumzang yi-ong kama la" },
    { tibetan: 'སྙན་གྲགས་དུང་དང་ཕུན་ཚོགས་དཔལ་བེའུ། །', converted: "nyentrak toungtang p'unts'ok palpé-ou" },
    { tibetan: 'མི་ནུབ་རྒྱལ་མཚན་དབང་བསྒྱུར་འཁོར་ལོ་སྟེ། །', converted: "minoup guialts'en wang-guiour khorlo té" },
    { tibetan: 'རིན་ཆེན་རྟགས་མཆོག་བརྒྱད་ཀྱི་ཕྱག་མཚན་ཅན། །', converted: "rintch'en taktch'ok guiékyi tch'akts'en tchen" },
    { tibetan: 'ཕྱོགས་དུས་རྒྱལ་བ་མཆོད་ཅིང་དགྱེས་བསྐྱེད་མ། །', converted: "tch'oktu guialwa tch'eutching guiékyé ma" },
    { tibetan: 'སྒེགས་སོགས་ངོ་བོ་དྲན་པའི་དཔལ་འཕེལ་བ། །', converted: "gueksok ngowo trenpé palp'el wa" },
    { tibetan: 'བཀྲ་ཤིས་ལྷ་མོ་བརྒྱད་ལ་ཕྱག་འཚལ་ལོ། །', converted: "trachi lhamo guiéla tch'akts'al lo" },
    { tibetan: 'ཚངས་པ་ཆེན་པོ་བདེ་འབྱུང་སྲེད་མེད་བུ། །', converted: "ts'angpa tch'enpo dédjoung sémé pou" },
    { tibetan: 'མིག་སྟོང་ལྡན་དང་རྒྱལ་པོ་ཡུལ་འཁོར་སྲུང་། །', converted: "miktong dentang guialpo yulkhor soung" },
    { tibetan: 'འཕགས་སྐྱེས་པོ་དང་ཀླུ་དབང་མིག་མི་བཟང་། །', converted: "p'ak-kyé potang louwang mikmi zang" },
    { tibetan: 'རྣམ་ཐོས་སྲས་ཏེ་ལྷ་རྫས་འཁོར་ལོ་དང་། །', converted: "namt'eu sété lhadzé khorlo tang" },
    { tibetan: 'ཏྲི་ཤུ་ལ་དང་མདུང་ཐུང་རྡོ་རྗེ་ཅན། །', converted: "trichou latang doungt'oung dordjé tchen" },
    { tibetan: 'པི་ཝཾ་རལ་གྲི་མཆོད་རྟེན་རྒྱལ་མཚན་འཛིན། །', converted: "piwam raltri tch'orten guialts'en dzin" },
    { tibetan: 'ས་གསུམ་གནས་སུ་བཀྲ་ཤིས་དགེ་ལེགས་འཕེལ། །', converted: "sassoum néssou trachi guélek p'el" },
    { tibetan: 'འཇིག་རྟེན་སྐྱོང་བ་བརྒྱད་ལ་ཕྱག་འཚལ་ལོ། །', converted: "djikten kyongwa guiéla tch'akts'al lo" },
    { tibetan: 'བདག་ཅག་དེང་འདིར་བྱ་བ་རྩོམ་པ་ལ། །', converted: "datchak tengdir tch'awa tsompa la" },
    { tibetan: 'བགེགས་དང་ཉེ་བར་འཚེ་བ་ཀུན་ཞི་ནས། །', converted: "guektang nyéwar ts'éwa kunshi né" },
    { tibetan: 'འདོད་དོན་དཔལ་འཕེལ་བསམ་དོན་ཡིད་བཞིན་འགྲུབ། །', converted: "deuteun palp'el samteun yishin droup" },
    { tibetan: 'བཀྲ་ཤིས་བདེ་ལེགས་ཕུན་སུམ་ཚོགས་པར་ཤོག', converted: "trachi délek p'unsoum ts'okpar cho" }
  ]
})
