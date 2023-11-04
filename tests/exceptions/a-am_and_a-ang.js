import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Exceptions - A-am and a-ang',
  tests: [
    { tibetan: 'མིའམ་ཅི་ཡིས་', converted: 'mi-am chiyi' },
    { tibetan: 'ནའང་མི་ཤེས', converted: "na-ang mishé" }, // -ang on first syllable
    { tibetan: 'ཤར་བའང་མི་ཤེས', converted: "sharwa-ang mishé" }, // -ang on second syllable

    // Should this following one be like that?
    // Or should it be 'pami amchi yi'?
    { tibetan: 'པ་མིའམ་ཅི་ཡིས་', converted: 'pami-am chiyi' },
  ]
})
