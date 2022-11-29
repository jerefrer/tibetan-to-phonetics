var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Suffixes',
  tests: [
    // da/sa: ümlaut & silent
    { tibetan: 'པད', converted: 'pé' },
    { tibetan: 'རྒྱད', converted: 'gyé' },
    { tibetan: 'པས', converted: 'pé' },
    { tibetan: 'པོས', converted: 'pö' },
    { tibetan: 'རྒྱས', converted: 'gyé' },

    // na: ümlaut & pronounced & nasalazies
    { tibetan: 'པན', converted: 'pen' },
    { tibetan: 'རྒྱན', converted: 'gyen' },

    // la: ümlauts & pronounced & softens
    { tibetan: 'པལ', converted: 'pel' },
    { tibetan: 'རྒྱལ', converted: 'gyel' },
    { tibetan: 'རྒྱེལ', converted: 'gyel' },

    // ka/pa : pronounced & softens
    { tibetan: 'ལག', converted: 'lak' },
    { tibetan: 'ལེག', converted: 'lek' },
    { tibetan: 'འཕགས', converted: "p'ak" },
    { tibetan: 'ལབ', converted: "lap" },
    { tibetan: 'ལེབ', converted: "lep" },
    { tibetan: 'གྲུབ', converted: "trup" },

    // nga/ma: pronounced & softens
    { tibetan: 'ཁང', converted: 'khang' },
    { tibetan: 'ཆུང', converted: 'chung' },
    { tibetan: 'མཉམ', converted: 'nyam' },
    { tibetan: 'ལམ', converted: 'lam' },
    { tibetan: 'སྟེང', converted: 'teng' },

    // ra: pronounced
    { tibetan: 'མར', converted: 'mar' },
    { tibetan: 'ཐར', converted: 'thar' },

    // ': not pronounced
    { tibetan: 'བཀའ', converted: 'ka' },
    { tibetan: 'བགའ', converted: 'ga' },

    // 'i as dreldra
    { tibetan: 'བགའི',  converted: 'gé' },
    { tibetan: 'བགིའི', converted: 'gi' },
    { tibetan: 'བགུའི', converted: 'gü' },
    { tibetan: 'བགེའི', converted: 'gé' },
    { tibetan: 'བགོའི', converted: 'gö' },

    // 'o as ending particle
    { tibetan: 'བགའོ',  converted: 'ga-o' },
    { tibetan: 'བགིའོ', converted: 'gi-o' },
    { tibetan: 'བགུའོ', converted: 'gu-o' },
    { tibetan: 'བགེའོ', converted: 'gé-o' },
    { tibetan: 'བགོའོ', converted: 'go-o' },

    // 'm as and/or particle
    { tibetan: 'པའང',  converted: 'pa-ang' },

    // 'ng as concessive particle
    { tibetan: 'པའམ',  converted: 'pa-am' },

    // 'u for specific words
    { tibetan: 'བེའུ', converted: 'pé-u' },
    { tibetan: 'མིའུ', converted: 'mi-u' },
    { tibetan: 'ཀུའུ', converted: 'ku-u' },
    { tibetan: 'ཀྲུའུ', converted: 'tru-u' },
    { tibetan: 'ཕྱུའུ', converted: 'chu-u' },
    { tibetan: 'ནེའུ', converted: 'né-u' },
    { tibetan: 'རྡེའུ', converted: 'dé-u' },
    { tibetan: 'མདེའུ', converted: 'dé-u' },
    { tibetan: 'དྲེའུ', converted: 'tré-u' },
    { tibetan: 'མཐེའུ', converted: 'thé-u' },
    { tibetan: 'སྒྱེའུ', converted: 'gyé-u' },
  ]
})