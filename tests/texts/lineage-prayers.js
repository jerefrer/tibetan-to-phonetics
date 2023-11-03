var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Lineage prayers (Morning Prayers)',
  includeInPercentage: true,
  sentences: true,
  tests: [
    { tibetan: 'ཀུན་བཟང་རྡོར་སེམས་དགའ་རབ་ཤྲཱི་སེང་༔ ', converted: "künzang dorsem garap shiri seng" },
    { tibetan: 'པདྨ་ཀ་རཱ་རྗེ་འབངས་ཉི་ཤུ་ལྔ༔ ', converted: "padma kara jembang nyishu nga" },
    { tibetan: 'སོ་ཟུར་གནུབས་གཉགས་གཏེར་སྟོན་བརྒྱ་རྩ་སོགས༔ ', converted: "sosur nupnyak tertön gyatsa sok" },
    { tibetan: 'བཀའ་གཏེར་བླ་མ་རྣམས་ལ་གསོལ་བ་འདེབས༔ ', converted: "kater lama namla sölwa dep" },
    { tibetan: 'ཨོ་རྒྱན་སངས་རྒྱས་གཉིས་པའི་ཐུགས་ཀྱི་སྲས། །', converted: "orgyen sang-gyé nyipé thuk-kyi sé" },
    { tibetan: 'གཏེར་འབྱིན་གྲུབ་ཐོབ་རྒྱ་མཚོའི་འཁོར་ལོས་བསྒྱུར། །', converted: "terjin trupthop gyamtsö khorlö gyur" },
    { tibetan: 'རྣམ་ཐར་བསམ་ཡས་སྙིགས་དུས་བསྟན་འགྲོའི་མགོན། །', converted: "namthar samyé nyiktü tendrö gön" },
    { tibetan: 'མཆོག་གྱུར་གླིང་པའི་ཞབས་ལ་གསོལ་བ་འདེབས། །', converted: "chok-kyur lingpé zhapla sölwa dep" },
    { tibetan: 'སྔོན་ཚེ་རིག་འཛིན་ནུས་ལྡན་རྡོ་རྗེ་རྩལ། །', converted: "ngöntsé rikdzin nüden dorjé tsal" },
    { tibetan: 'མ་འོངས་བདེ་གཤེགས་མོས་པ་མཐའ་ཡས་ཞབས། །', converted: "ma-ong déshek möpa thayé zhap" },
    { tibetan: 'ད་ལྟ་པད་འབྱུང་རྒྱལ་ཚབ་འདྲོག་བན་དངོས། །', converted: "tata péjung gyaltsap drokpen ngö" },
    { tibetan: 'འཇིགས་བྲལ་ཡེ་ཤེས་རྡོ་རྗེར་གསོལ་བ་འདེབས། །', converted: "jiktral yéshé dorjer sölwa dep" },
    { tibetan: 'སངས་རྒྱས་ཀུན་གྱི་མཁྱེ༵ན་གཉིས་ཡེ་ཤེས་གཟུགས། །', converted: "sang-gyé künkyi khyen-nyi yéshé zuk" },
    { tibetan: 'བརྩེ༵་ཆེན་ཡེ་ཤེས་རྣམ་རོལ་འཇམ་དཔལ་དབྱངས། །', converted: "tséchen yéshé namröl jampal yang" },
    { tibetan: 'ཐུབ་བསྟན་ཤིང་རྟ་མཁས་གྲུབ་དབང་པོ་ཆེ། །', converted: "thupten shingta khétrup wangpo ché" },
    { tibetan: 'པ༵དྨ་མདོ༵་སྔག༵ས་གླིང༵་པར༵་གསོལ་བ་འདེབས། །', converted: "padma do-ngak lingpar sölwa dep" },
    { tibetan: 'ང༵ག་དབ༵ང་སྲས་བཅས་རྒྱལ་ཀུན་དགྱེས་པའི་ལམ། །', converted: "ngakwang séché gyalkün gyépé lam" },
    { tibetan: 'དོན་གྱི་གྲག༵ས་པ༵་མཐའ་ཡས་འབྱུང་བའི་གཞི། །', converted: "tönkyi trakpa thayé jungwé zhi" },
    { tibetan: 'གསན་བསམ་སྒོམ་པས་ཐུབ་བསྟན་ལེགས་འཛིན་བཤེས། །', converted: "sensam gompé thupten lekdzin shé" },
    { tibetan: 'དགེ༵་ལེ༵གས་དཔ༵ལ་འབ༵ར་ཞབས་ལ་གསོལ་བ་འདེབས། །', converted: "gélek palbar zhapla sölwa dep" },
    { tibetan: 'འོག་མིན་ཆོས་ཀྱི་དབྱིངས་ཀྱི་ཕོ་བྲང་ནས། །', converted: "omin chökyi yingkyi p'otrang né" },
    { tibetan: 'དུས་གསུམ་སངས་རྒྱས་ཀུན་གྱི་ངོ་བོ་ཉིད། །', converted: "tüsum sang-gyé künkyi ngowo nyi" },
    { tibetan: 'རང་སེམས་ཆོས་སྐུར་མངོན་སུམ་སྟོན་མཛད་པ། །', converted: "rangsem chökur ngönsum töndzé pa" },
    { tibetan: 'རྩ་བའི་བླ་མའི་ཞབས་ལ་གསོལ་བ་འདེབས།། །།', converted: "tsawé lamé zhapla sölwa dep" },
  ]
});