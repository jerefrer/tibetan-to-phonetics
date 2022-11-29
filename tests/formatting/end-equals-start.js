var { runTestGroup } = require('../helpers.js');

runTestGroup({
  name: 'Formatting - End equals start - Merge',
  rules: {
    endEqualsStart: 'merge'
  },
  tests: [
    { tibetan: 'སངས་རྒྱས་',  converted: 'sangyé' },
    { tibetan: 'བསམ་མི་', converted: 'sami' },
    { tibetan: 'རིགས་ཀྱི་', converted: 'rikyi' },
    { tibetan: 'གཞོན་ནུ', converted: 'zhönu' },
  ]
})

runTestGroup({
  name: 'Formatting - End equals start - Dash',
  rules: {
    endEqualsStart: 'dash'
  },
  tests: [
    { tibetan: 'སངས་རྒྱས་',  converted: 'sang-gyé' },
    { tibetan: 'བསམ་མི་', converted: 'sam-mi' },
    { tibetan: 'རིགས་ཀྱི་', converted: 'rik-kyi' },
    { tibetan: 'གཞོན་ནུ', converted: 'zhön-nu' },
  ]
})

runTestGroup({
  name: 'Formatting - End equals start - Space',
  rules: {
    endEqualsStart: 'space'
  },
  tests: [
    { tibetan: 'སངས་རྒྱས་',  converted: 'sang gyé' },
    { tibetan: 'བསམ་མི་', converted: 'sam mi' },
    { tibetan: 'རིགས་ཀྱི་', converted: 'rik kyi' },
    { tibetan: 'གཞོན་ནུ', converted: 'zhön nu' },
  ]
})

runTestGroup({
  name: 'Formatting - End equals start - Leave',
  rules: {
    endEqualsStart: 'leave'
  },
  tests: [
    { tibetan: 'སངས་རྒྱས་',  converted: 'sanggyé' },
    { tibetan: 'བསམ་མི་', converted: 'sammi' },
    { tibetan: 'རིགས་ཀྱི་', converted: 'rikkyi' },
    { tibetan: 'གཞོན་ནུ', converted: 'zhönnu' },
  ]
})
