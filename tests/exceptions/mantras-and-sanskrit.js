var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Exceptions - Mantras and Sanskrit',
  tests: [
    { tibetan: 'ཧཱུཾ', converted: 'hung' },
    { tibetan: 'ཧཱུྃ', converted: 'hung' },
    { tibetan: 'ཧཱུྂ', converted: 'hung' },
    { tibetan: 'བྷྲཱུཾ', converted: 'bhrum' },
    { tibetan: 'བྷྲཱུྃ', converted: 'bhrum' },
    { tibetan: 'བྷྲཱུྂ', converted: 'bhrum' },

    { tibetan: 'ཨ་ཨ་ཨ།', converted: 'a a a'},
    { tibetan: 'རཾ་ཡཾ་ཁཾ་', converted: 'ram yam kham' },
    { tibetan: 'རྃ་ཡྃ་ཁྃ་', converted: 'ram yam kham' },
    { tibetan: 'རྂ་ཡྂ་ཁྂ་', converted: 'ram yam kham' },
    { tibetan: 'ༀ་ཨཱཿཧཱུྃ', converted: 'om ah hung' },
    { tibetan: 'ཨོཾ་ཨཱཿཧཱུཾ།', converted: 'om ah hung' },
    { tibetan: 'ཧ་ཧོ་ཧྲཱི' , converted: 'ha ho hri' },

    { tibetan: 'ཀཱ་ཝཱ་ཙི་', converted: 'ka wa tsi'},
    { tibetan: 'ཝཱཀ་', converted: 'waka'},
    { tibetan: 'ཙིཏྟ་', converted: 'chitta'},

    { tibetan: 'ཀྲི་ཡ', converted: 'kriya' },
    { tibetan: 'ཨུ་པ', converted: 'upa' },
    { tibetan: 'ཡོ་ག', converted: 'yoga' },
    { tibetan: 'མ་ཧཱ', converted: 'maha' },
    { tibetan: 'ཨ་ནུ', converted: 'anu' },
    { tibetan: 'ཨ་ཏི', converted: 'ati' },

    { tibetan: 'སྭ་སྟི།' , converted: 'svasti' },
    { tibetan: 'ༀ་སྭ་སྟི།' , converted: 'om svasti' },

    { tibetan: 'པདྨ་', converted: 'padma' },
    { tibetan: 'པདྨ་གེ་སར་', converted: 'padma késar' },
    { tibetan: 'དིཔྟ་ཙཀྲ་', converted: 'dipta tsaktra' },
    { tibetan: 'ཀྲོསྡ་', converted: 'krodha' },
    { tibetan: 'ཝཱ་རཱ་ཧཱི', converted: 'warahi' },
    { tibetan: 'ས་པ་རི་ཝཱ་ར་བཛྲ་ས་མ་ཡ་ཛཿ', converted: 'sapariwara vajra samaya dza' },
    { tibetan: 'ཏིཥྛ་ལྷན༔', converted: 'tishtha lhan' },
    { tibetan: 'ཨ་ཏི་པཱུ་ཧོཿ', converted: 'atipu ho' },
    { tibetan: 'པྲ་ཏཱིཙྪ་ཧོཿ', converted: 'pratitsa ho' },
    { tibetan: 'དྷརྨཱ་པཱ་ལ་', converted: 'dharmapala' },
    { tibetan: 'སརྦ་པཉྩ་ཨ་མྲྀ་ཏ་ཁཱ་ཧི༔', converted: 'sarwa pañtsa amrita khahi' },
    { tibetan: 'མ་ཧཱ་རཀྟ་ཁཱ་ཧི༔', converted: 'maha rakta khahi' },
    { tibetan: 'མ་ཧཱ་སརྦ་པཱུ་ཛ་ཁཱ་ཧི༔', converted: 'maha sarwa puja khahi' },
    { tibetan: 'དྷེ་ཝ་ཤཱནྟ་ཀྲོ་དྷ་མཎྜ་ལ་', converted: 'déwa shenta krodha mandala' },
    { tibetan: 'དྷ་ཀ་དྷཱ་ཀི་ནཱི་', converted: 'daka dakini' },
    { tibetan: 'ཌཱཀྐི་ནི་', converted: 'dakini' },
    { tibetan: 'སརྦ་དྷརྨ་པཱ་ལ་', converted: 'sarwa dharmapala' },
    { tibetan: 'སརྦ་བ་སུ་དེ་ཝ་', converted: 'sarwa wasu déwa' },
    { tibetan: 'ནཱི་དྷི་པ་ཏི་བྷཱུ་མི་པ་ཏི་', converted: 'nidhipati bhumipati' },
    { tibetan: 'མ་ཧཱ་ཀཱ་ལ་', converted: 'mahakala'},
    { tibetan: 'མ་ཧཱ་ཀཱ་ལཱ་', converted: 'mahakalaya'},
    { tibetan: 'ཏིཥྛ་བཛྲ།', converted: 'tishtha vajra'},
    { tibetan: 'རཀྵ་', converted: 'raksha'},
    { tibetan: 'མཉྫུ་གྷོ་ཥ', converted: 'manjugosha'},

    { tibetan: 'ཨོཾ་མཾ་ཨཾ་ཙཾ་ཏཾ་', converted: 'om mam ang tsam tam' },
    {
      tibetan: 'ༀ་ཨ་ར་པ་ཙ་ན་སྡིཿསྡིཿསྡིཿ',
      converted: 'om a ra pa tsa na di di di'
    },
    {
      tibetan: 'ཨོཾ་ཨཱཿཧཱུྃ་བཛྲ་གུ་རུ་པདྨ་ས་པ་རི་ཝཱ་ར་ཨི་དཾ་བ་ལིཾ་ཏ་ཁ་ཁ་ཁཱ་ཧི་ཁཱ་ཧི།',
      converted: 'om ah hung vajra guru padma sapariwara idam balingta kha kha khahi khahi'
    },
    {
      tibetan: 'ཧྲཱིཿཔདྨཱནྟ་ཀྲྀཏ་བཛྲ་ཀྲོ་དྷ་ཧྱ་གྲཱྀ་ཝ་སརྦ་བིགྷྣཱན་ཧ་ན་ཧ་ན་ཧཱུྃ་ཕཊ྄',
      converted: 'hri padmanta krit vajra krodha haya griwa sarwa bighanen hana hana hung phet'
    },
    {
      tibetan: 'ན་མཿ སརྦ་ཏ་ཐཱ་ག་ཏ་བྷྱོཿབི་ཤྭ་མུ་ཁེ་བྷྱཿ སརྦ་ཐཱ་ཁཾ་ཨུདྒཏེ་སྥ་ར་ཎ་ཨི་མཾ་ག་ག་ན་ཁཾ་སྭཱ་ཧཱཿ',
      converted: 'nama sarwa tathagata bayo bishu mukébé sarwa thakham utgaté saparana imam gagana kham svaha'
    },
    {
      tibetan: 'ཨོཾ་བཛྲ་ཨརྒྷཾ་པཱ་དྱཾ་པུཥྤེ་དྷཱུ་པེ་ཨཱ་ལོ་ཀེ་གནྡྷེ་ནཻ་ཝི་དྱ་ཤཔྡ་པྲ་ཏཱིཙྪ་ཡེ་སྭཱ་ཧཱ།',
      converted: 'om vajra argham padyam pushpé dhupé aloké gandhé naiwindyé shapta pratitsayé svaha'
    },
    {
      tibetan: 'ས་པ་རི་ཝཱ་ར་ཨི་དཾ་བ་ལིངྟ་ཁ་ཁ་ཁཱ་ཧི་ཁཱ་ཧི༔',
      converted: 'sapariwara idam balingta kha kha khahi khahi'
    },
    {
      tibetan: 'ༀ་ཨ་ཀཱ་རོ་མུ་ཁཾ་སརྦ་དྷརྨཱ་ཎཾ་ཨཱདྱ་ནུཏྤནྣ་ཏོཏྟ་ༀ་ཨཱཿཧཱུྃ་ཕཊ་སྭཱཧཱ།',
      converted: 'om akaro mukham sarwa dharma nam adi anütpena tota om ah hung phet svaha'
    },

  ]
})