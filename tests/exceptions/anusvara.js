import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Exceptions - Anusvara',
  tests: [
    { tibetan: 'ཨོཾ', converted: 'om' },
    { tibetan: 'ཨོྃ', converted: 'om' },
    { tibetan: 'ཨོྂ', converted: 'om' },

    { tibetan: 'རཾ་', converted: 'ram' },
    { tibetan: 'རྃ་', converted: 'ram' },
    { tibetan: 'རྂ་', converted: 'ram' },
    { tibetan: 'ཡྃ་', converted: 'yam' },
    { tibetan: 'ཁྂ་', converted: 'kham' },

    { tibetan: 'བཾ', converted: 'bam' },
    { tibetan: 'མཾ', converted: 'mam' },
    { tibetan: 'ཝཾ', converted: 'wam' },

    { tibetan: 'ཧཾ', converted: 'hang' },
    { tibetan: 'ཧུཾ', converted: 'hung' },
  ]
})