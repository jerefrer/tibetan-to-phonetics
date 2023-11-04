import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Formatting - Honorific markers (anusvara) are ignored - In regular text',
  tests: [
    { tibetan: 'འཇི༵གས་མེ༵ད་', converted: 'jikmé' },
    { tibetan: 'མཁྱེ༵ན་བརྩེ༵འི་', converted: 'khyentsé' },
    { tibetan: 'ནུས༵་ལྡན༵་', converted: 'nüden' },
    { tibetan: 'རྡོ༵་རྗེ༵་', converted: 'dorjé' },
    { tibetan: 'རྒྱལ༵་པོ་',  converted: 'gyalpo' },
  ]
})

runTestGroup({
  name: 'Formatting - Honorific markers (anusvara) are ignored - In exceptions',
  tests: [
    { tibetan: 'པ༵དྨ་',  converted: 'padma' },
    { tibetan: 'པ༵དྨ༵འི་',  converted: 'padmé' }
  ]
})
