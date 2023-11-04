import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Dao-wa',
  tests: [
    { tibetan: 'དབ',    converted:   'wa'},
    { tibetan: 'དབང',   converted: 'wang'},
    { tibetan: 'དབི',   converted:    'i'},
    { tibetan: 'དབུ',   converted:    'u'},
    { tibetan: 'དབུས',  converted:    'ü'},
    { tibetan: 'དབུག',  converted:   'uk'},
    { tibetan: 'དབུམ',  converted:   'um'},
    { tibetan: 'དབུན',  converted:   'ün'},
    { tibetan: 'དབུལ',  converted:   'ül'},
    { tibetan: 'དབུར',  converted:   'ur'},
    { tibetan: 'དབུས',  converted:    'ü'},
    { tibetan: 'དབེ',   converted:    'é'},
    { tibetan: 'དབོ',   converted:    'o'},
    { tibetan: 'དབྱ',   converted:   'ya'},
    { tibetan: 'དབྱི',  converted:   'yi'},
    { tibetan: 'དབྱུ',  converted:   'yu'},
    { tibetan: 'དབྱེ',  converted:   'yé'},
    { tibetan: 'དབྱེ',  converted:   'yé'},
    { tibetan: 'དབྱོ',  converted:   'yo'},
    { tibetan: 'དབྱོམ',  converted:   'yom'},
    { tibetan: 'དབྱོན',  converted:   'yön'},
    { tibetan: 'དབྱོལ',  converted:   'yöl'}
  ]
})