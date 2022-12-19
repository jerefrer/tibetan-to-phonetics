var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Prayer in seven chapters (Morning Prayers, not the actual Seven Chapters)',
  includeInPercentage: true,
  sentences: true,
  tests: [
    // Chapter 1
    { tibetan: 'ༀ་ཨཱཿཧཱུྃ་བཛྲ་གུ་རུ་པདྨ་སིདྡྷི་ཧཱུྃ༔' , converted : "om ah hung vajra guru padma siddhi hung" },
    { tibetan: 'ༀ་ཡིག་འཆི་མེད་ཡེ་ཤེས་རྡོ་རྗེའི་སྐུ། །', converted : "om yik chimé yéshé dorjé ku" },
    { tibetan: 'ཨཱཿནི་ཀུན་ཁྱབ་ཆོས་དབྱིངས་རྡོ་རྗེའི་གསུང་། །', converted : "ah ni künkhyap chöying dorjé sung" },
    { tibetan: 'ཧཱུྃ་ཞེས་བདེ་ཆེན་མི་འགྱུར་རྡོ་རྗེའི་ཐུགས། །', converted : "hung zhé déchen mingyur dorjé thuk" },
    { tibetan: 'ཨོ་རྒྱན་སློབ་དཔོན་ཆེན་པོར་གསོལ་བ་འདེབས། །', converted : "orgyen lop-pön chenpor sölwa dep" },
    { tibetan: 'བཛྲ་སྤྲོས་བྲལ་ཆོས་དབྱིངས་ཀ་དག་མཁར། །', converted : "vajra trötrel chöying katak khar" },
    { tibetan: 'གུ་རུ་བདེ་ཆེན་ཁུར་ལྕི་ཐོད་ཕྲེང་ལྔ། །', converted : "guru déchen khurchi thötr'eng nga" },
    { tibetan: 'པདྨ་སྐྱོན་བྲལ་རང་བྱུང་སངས་རྒྱས་གཉིས། །', converted : "padma kyöntrel rangchung sang-gyé nyi" },
    { tibetan: 'སྐུ་གསུམ་དབྱེར་མེད་བླ་མར་གསོལ་བ་འདེབས། །', converted : "kusum yermé lamar sölwa dep" },
    { tibetan: 'སིདྡྷི་ཐུན་མོང་ལམ་གྱུར་རིག་འཛིན་བཞི། །', converted : "siddhi thünmong lamkyur rikdzin zhi" },
    { tibetan: 'སྒྲུབ་ལ་ཕྱི་ནང་གསང་བའི་བར་ཆད་ཞི། །', converted : "drupla chinang sangwé parché zhi" },
    { tibetan: 'ཡིད་བཞིན་འདོད་པའི་དོན་ཀུན་འགྲུབ་པ་ཡིས། །', converted : "yizhin döpé tönkün drup-pa yi" },
    { tibetan: 'ཧཱུྃ་ཞེས་ཡེ་ཤེས་ཐིག་ལེར་དབྱེར་མེད་མཛོད། །', converted : "hung zhé yéshé thikler yermé dzö" },
    // Chapter 2
    { tibetan: 'ༀ་ནི་རྒྱལ་བ་དགོངས་བརྒྱུད་ཀུན་ཏུ་བཟང་། །', converted: "om ni gyelwa gong-gyü küntu zang" },
    { tibetan: 'ཨཱཿཞེས་བརྡ་བརྒྱུད་རིག་འཛིན་སྒྱུ་འཕྲུལ་དྲ། །', converted: "ah zhé dagyü rikdzin gyutr'ül tra" },
    { tibetan: 'ཧཱུྃ་ཞེས་སྙན་བརྒྱུད་ཤིང་རྟ་པདྨ་འབྱུང་། །', converted: "hung zhé nyengyü shingta padma jung" },
    { tibetan: 'བརྒྱུད་གསུམ་དཔལ་ཡོན་བླ་མར་གསོལ་བ་འདེབས། །', converted: "gyüsum pelyön lamar sölwa dep" },
    { tibetan: 'བཛྲ་ཏནྟྲ་གསང་སྔགས་བླ་མེད་ལམ། །', converted: "vajra tantra sang-ngak lamé lam" },
    { tibetan: 'གུ་རུ་ཡི་དམ་མཁའ་འགྲོ་ཞི་ཁྲོའི་གར། །', converted: "guru yitam khandro zhitr'ö kar" },
    { tibetan: 'པདྨའི་ཕྲེང་ལྟར་བསམ་ཡས་གང་འདུལ་ཅན། །', converted: "padmé tr'engtar samyé kangdül chen" },
    { tibetan: 'རབ་འབྱམས་དཀྱིལ་འཁོར་ཁྱབ་བདག་གསོལ་བ་འདེབས། །', converted: "rabjam kyilkhor khyapda sölwa dep" },
    { tibetan: 'དཔག་ཡས་བཀའ་གཏེར་མངའ་བདག་རྒྱ་མཚོའི་མཛོད། །', converted: "pakyé kater ngada gyamtsö dzö" },
    { tibetan: 'སིདྡྷི་ཛྙཱ་ན་སྒྲུབ་པའི་གསང་ལམ་ཆེའི། །', converted: "siddhi gyana drup-pé sanglam ché" },
    { tibetan: 'བསྟན་དང་དེར་འཛིན་འཕེལ་རྒྱས་མི་མཐུན་ཞི། །', converted: "tentang terdzin p'elgyé mithün zhi" },
    { tibetan: 'ཧཱུྃ་ཡིག་ཁྱབ་བདག་རྡོ་རྗེ་སེམས་འགྲུབ་ཤོག །', converted: "hung yik khyapda dorjé semdrup sho" },
    // Chapter 3
    { tibetan: 'ༀ་ནི་གཏིང་གསལ་གཞོན་ནུ་བུམ་པའི་དབྱིངས། །',  converted: "om ni tingsel zhön-nu pumpé ying" },
    { tibetan: 'ཨཱཿཡིག་གར་དབང་བདེ་ཆེན་དགའ་བའི་ཞིང་། །',  converted: "ah yik karwang déchen gawé zhing" },
    { tibetan: 'ཧཱུྃ་ཞེས་རང་སྣང་མཁའ་སྤྱོད་པདྨ་འོད། །',  converted: "hung zhé rang-nang khachö padma ö" },
    { tibetan: 'སྐུ་གསུམ་ཞིང་གི་བདག་པོར་གསོལ་བ་འདེབས། །',  converted: "kusum zhingki dapor sölwa dep" },
    { tibetan: 'བཛྲ་དབྱིངས་ཀྱི་གཞལ་ཡས་ཁང་ཆེན་པོར། །',  converted: "vajra yingkyi zhelyé khangchen por" },
    { tibetan: 'གུ་རུ་ཨོ་རྒྱན་གང་འདུལ་བཀོད་པ་ཆེ། །',  converted: "guru orgyen kangdül köpa ché" },
    { tibetan: 'པདྨ་འབྱུང་གནས་ཕུན་ཚོགས་ངེས་པ་ལྔ། །',  converted: "padma jung-né p'üntsok ngépa nga" },
    { tibetan: 'རྟེན་དང་སྟོན་འཁོར་བཅས་ལ་གསོལ་བ་འདེབས། །',  converted: "tentang tönkhor chéla sölwa dep" },
    { tibetan: 'སིདྡྷི་རྡོ་རྗེའི་ལམ་མཐར་མ་སོན་ན། །',  converted: "siddhi dorjé lamthar masön na" },
    { tibetan: 'དགའ་བའི་གནས་དེར་སྐད་ཅིག་སྐྱེས་ནས་ཀྱང་། །',  converted: "gawé néter kéchik kyéné kyang" },
    { tibetan: 'བར་ཆད་མེད་པ་ཞལ་མཐོང་ལུང་བསྟན་ནས། །',  converted: "parché mépa zhelthong lungten né" },
    { tibetan: 'ཧཱུྃ་ཡིག་པད་འབྱུང་ཡེ་ཤེས་རོ་གཅིག་ཤོག །',  converted: "hung yik péjung yéshé rochik sho" },
    // Chapter 4
    { tibetan: 'ༀ་ནི་དང་པོ་སངས་རྒྱས་ཀུན་ཏུ་འཆང་། །', converted: "om ni tangpo sang-gyé küntu chang" },
    { tibetan: 'ཨཱཿཞེས་ཐོད་ཕྲེང་སྒྱུ་འཕྲུལ་རིགས་མཆོག་ལྔ། །', converted: "ah zhé thötr'eng gyutr'ül rikchok nga" },
    { tibetan: 'ཧཱུྃ་ཡིག་མི་མཇེད་སྟོན་པ་མཚོ་ལས་སྐྱེས་། །', converted: "hung yik mijé tönpa tsolé kyé" },
    { tibetan: 'དྲུག་ལྡན་བརྒྱུད་པའི་བླ་མར་གསོལ་བ་འདེབས། །', converted: "trukden gyüpé lamar sölwa dep" },
    { tibetan: 'བཛྲ་སྒྱུ་འཕྲུལ་རྒྱུད་དང་སྒྲུབ་སྡེ་བརྒྱད། །', converted: "vajra gyutr'ül gyütang drupdé gyé" },
    { tibetan: 'གུ་རུའི་ཡེ་ཤེས་དགོངས་ཀློང་གཅིག་ཏུ་འཁྱིལ། །', converted: "gurü yéshé gonglong chiktu khyil" },
    { tibetan: 'པདྨ་ཐོད་ཕྲེང་དངོས་གྲུབ་རྒྱ་མཚོའི་གཏེར། །', converted: "padma thötr'eng ngötrup gyamtsö ter" },
    { tibetan: 'སངས་རྒྱས་གཉིས་པའི་ཞབས་ལ་གསོལ་བ་འདེབས། །', converted: "sang-gyé nyipé zhapla sölwa dep" },
    { tibetan: 'སིདྡྷི་ཛྙཱ་ན་ཐིག་ལེ་གཅིག་གི་མདངས། །', converted: "siddhi gyana thiklé chik-ki dang" },
    { tibetan: 'ལྷ་སྔགས་ཡེ་ཤེས་རོལ་མོར་དགའ་བའི་མཐུས། །', converted: "lha-ngak yéshé rölmor gawé thü" },
    { tibetan: 'གཟུང་འཛིན་འཁྲུལ་པའི་མུན་པ་རང་སངས་ནས། །', converted: "zungdzin tr'ülpé münpa rangsang né" },
    { tibetan: 'ཧཱུྃ་ཞེས་ཡེ་ཤེས་ཀློང་དུ་གཉིས་མེད་ཤོག །', converted: "hung zhé yéshé longtu nyimé sho" },
    // Chapter 5
    { tibetan: 'ༀ་ཡིག་འཆི་མེད་མགོན་པོ་འོད་མཐའ་ཡས། །', converted: "om yik chimé gönpo önthayé" },
    { tibetan: 'ཨཱཿནི་གསུང་གི་རྡོ་རྗེ་པད་དཀར་འཆང་། །', converted: "ah ni sungki dorjé pékar chang" },
    { tibetan: 'ཧཱུྃ་ཞེས་གངས་ཅན་སྟོན་པ་དུས་གསུམ་མཁྱེན། །', converted: "hung zhé kangchen tönpa tüsum khyen" },
    { tibetan: 'རྒྱལ་ཀུན་ཡེ་ཤེས་གཅིག་བསྡུས་གསོལ་བ་འདེབས། །', converted: "gyelkün yéshé chikdü sölwa dep" },
    { tibetan: 'བཛྲ་ཀཱ་ཡ་འཆི་མེད་མཚོ་ལས་འཁྲུངས། །', converted: "vajra kaya chimé tsolé tr'ung" },
    { tibetan: 'གུ་རུ་བདེ་ཆེན་རྣམ་ཐར་བསམ་ལས་འདས། །', converted: "guru déchen namthar samlé dé" },
    { tibetan: 'པདྨ་ལྟར་མཛེས་ངོ་མཚར་མཛད་པ་ཡི། །', converted: "padma tardzé ngotsar dzépa yi" },
    { tibetan: 'བཅུ་གཉིས་བདེན་དོན་དག་ལ་གསོལ་བ་འདེབས། །', converted: "chunyi dentön takla sölwa dep" },
    { tibetan: 'སིདྡྷི་ཁྱེད་དང་དབྱེར་མེད་བྱང་ཆུབ་ཕྱིར། །', converted: "siddhi khyétang yermé changchup chir" },
    { tibetan: 'གསོལ་འདེབས་གདུང་བའི་ཤུགས་ཀྱིས་དེངས་བསྐུལ་ན། །', converted: "söldep dungwé shuk-kyi tengkül na" },
    { tibetan: 'སྙིགས་མའི་རྒུད་ཞི་ཕན་བདེའི་དཔལ་སྤྱོད་པའི། །', converted: "nyikmé güzhi p'endé pelchö pé" },
    { tibetan: 'ཧཱུྃ་ཡིག་གསང་བ་ཆེན་པོར་བྱང་ཆུབ་ཤོག །', converted: "hung yik sangwa chenpor changchup sho" },
    // Chapter 6
    { tibetan: 'ༀ་ཡིག་མཁའ་ཁྱབ་ནམ་མཁའ་རྡོ་རྗེའི་སྐུ། །', converted: "om yik khakhyap namkha dorjé ku" },
    { tibetan: 'ཨཱཿནི་ཀུན་ཁྱབ་རྣམ་པ་ཐམས་ཅད་གསུང་། །', converted: "ah ni künkhyap nampa thamché sung" },
    { tibetan: 'ཧཱུྃ་ཞེས་མཁྱེན་བརྩེ་ནུས་པའི་རྩལ་ལྡན་ཐུགས། །', converted: "hung zhé khyentsé nüpé tselden thuk" },
    { tibetan: 'དབྱེར་མེད་རྡོ་རྗེའི་བླ་མར་གསོལ་བ་འདེབས། །', converted: "yermé dorjé lamar sölwa dep" },
    { tibetan: 'བཛྲ་མི་ཟད་རྒྱན་གྱི་འཁོར་ལོའི་དབྱིངས། །', converted: "vajra misé gyenkyi khorlö ying" },
    { tibetan: 'གུ་རུ་སངས་རྒྱས་ཀུན་མཉམ་ཕྲིན་ལས་ལ། །', converted: "guru sang-gyé kün-nyam tr'inlé la" },
    { tibetan: 'པདྨ་ལས་འཁྲུངས་སྐྱོན་བྲལ་ཡོན་ཏན་རྫོགས། །', converted: "padma létr'ung kyöntrel yönten dzok" },
    { tibetan: 'མཚུངས་མེད་བཀའ་དྲིན་ཅན་ལ་གསོལ་བ་འདེབས། །', converted: "tsungmé katrin chenla sölwa dep" },
    { tibetan: 'སིདྡྷི་ཁྱེད་ཀྱི་མཛད་པ་ཐུགས་བསྐྱེད་དང་། །', converted: "siddhi khyékyi dzépa thuk-kyé tang" },
    { tibetan: 'གཉིས་སུ་མེད་པའི་སྐལ་བཟང་བདག་སྦྱར་ལ། །', converted: "nyisu mépé kelzang dajar la" },
    { tibetan: 'གདུལ་དཀའ་འདུལ་བའི་ཕྲིན་ལས་ནམ་མཁའ་སྲིད། །', converted: "dülka dülwé tr'inlé namkha si" },
    { tibetan: 'ཧཱུྃ་ཡིག་རྟག་ཁྱབ་ལྷུན་འགྲུབ་མཛད་དུ་གསོལ། །', converted: "hung yik tak-khyap lhündrup dzétu söl" },
    // Chapter 7
    { tibetan: 'ༀ་ཡིག་བཀྲ་ཤིས་བྱེ་བའི་འབྱུང་གནས་ཆེ། །', converted: "om yik trashi chéwé jung-né ché" },
    { tibetan: 'ཨཱཿཞེས་སྣང་མཐའ་འཆི་མེད་རིག་འཛིན་ཚུལ། །', converted: "ah zhé nangtha chimé rikdzin tsül" },
    { tibetan: 'ཧཱུྃ་གི་སྣང་སྲིད་ཟིལ་གནོན་བདེ་ཆེན་རྒྱལ། །', converted: "hung ki nangsi silnön déchen gyel" },
    { tibetan: 'ཨོ་རྒྱན་ཡིད་བཞིན་ནོར་བུར་གསོལ་བ་འདེབས། །', converted: "orgyen yizhin norpur sölwa dep" },
    { tibetan: 'བཛྲ་དོན་གྱི་ཡེ་ཤེས་དབྱེར་མེད་ཀྱང་། །', converted: "vajra tönkyi yéshé yermé kyang" },
    { tibetan: 'གུ་རུ་བསམ་དོན་འགྲུབ་མཛད་སྐུའི་བཀོད་པ། །', converted: "guru samtön drupdzé kükö pa" },
    { tibetan: 'པདྨ་རྒྱལ་པོ་བཅུ་གསུམ་སྙིང་ནས་དྲན། །', converted: "padma gyelpo chusum nying-né tren" },
    { tibetan: 'བསམ་དོན་ལྷུན་གྱིས་གྲུབ་པར་གསོལ་བ་འདེབས། །', converted: "samtön lhünkyi trup-par sölwa dep" },
    { tibetan: 'སིདྡྷི་བདེ་ཆེན་མི་འགྱུར་དེ་ཉིད་དང་། །', converted: "siddhi déchen mingyur tényi tang" },
    { tibetan: 'གཉིས་མེད་བྱང་ཆུབ་བར་དུ་མི་མཐུན་ཞི། །', converted: "nyimé changchup partu mithün zhi" },
    { tibetan: 'འདོད་དགུའི་དོན་ཀུན་འབད་མེད་འགྲུབ་པ་ཡི། །', converted: "dögü tönkün bémé drup-pa yi" },
    { tibetan: 'ཧཱུྃ་ཞེས་བསྐུལ་བཞིན་བསམ་དོན་ཀུན་འགྲུབ་མཛོད། །', converted: "hung zhé külzhin samtön kündrup dzö" },
    // Chapter 8
    { tibetan: 'ༀ་ཡིག་ཆོས་སྐུ་སྣང་མཐའ་ཚེ་དཔག་མེད། །', converted: "om yik chöku nangtha tsépamé" },
    { tibetan: 'ཨཱཿཞེས་ལོངས་སྐུ་འགྲོ་འདུལ་སྤྱན་རས་གཟིགས། །', converted: "ah zhé longku drodül chenrézi" },
    { tibetan: 'ཧཱུྃ་གི་སྣང་སྲིད་ཟིལ་གནོན་པདྨ་འབྱུང་། །', converted: "hung ki nangsi silnön padma jung" },
    { tibetan: 'སྐུ་གསུམ་བླ་མར་བཞེངས་ལ་གསོལ་བ་འདེབས། །', converted: "kusum lamar zhengla sölwa dep" },
    { tibetan: 'བཛྲ་དྷུ་ཏིའི་བདེན་དོན་དགའ་བའི་གཟུགས། །', converted: "vajra dhuti dentön gawé zuk" },
    { tibetan: 'གུ་རུའི་རྣམ་འཕྲུལ་རིག་འཛིན་བཅུ་དང་གཉིས། །', converted: "gurü namtr'ül rikdzin chutang nyi" },
    { tibetan: 'པདྨ་སྒྱུ་འཕྲུལ་དྲ་བའི་ཚོགས་ཀུན་ལ། །', converted: "padma gyutr'ül trawé tsok-kün la" },
    { tibetan: 'མི་ཕྱེད་དད་པའི་གདུང་བས་གསོལ་བ་འདེབས། །', converted: "miché tépé dungwé sölwa dep" },
    { tibetan: 'སིདྡྷི་ལས་བཞི་གྲུབ་བརྒྱད་གནས་སྐབས་དང་། །', converted: "siddhi lézhi trupgyé nékap tang" },
    { tibetan: 'མཐར་ཐུག་ཕྱག་རྒྱ་ཆེན་པོའི་སར་སྦྱོར་ལ། །', converted: "tharthuk chakgya chenpö sarjor la" },
    { tibetan: 'ཕྱི་ནང་གསང་བའི་བར་ཆད་ཞི་བ་དང་། །', converted: "chinang sangwé parché zhiwa tang" },
    { tibetan: 'ཧཱུྃ་ཡིག་ཡེ་ཤེས་ཐིག་ལེར་རོ་གཅིག་ཤོག །', converted: "hung yik yéshé thikler rochik sho" },
    { tibetan: 'ༀ་ཨཱཿཧཱུྃ་བཛྲ་གུ་རུ་པདྨ་སིདྡྷི་ཧཱུྃ༔', converted: "om ah hung vajra guru padma siddhi hung" }
  ]
});