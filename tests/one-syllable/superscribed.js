import { runTestGroup } from '../helpers.js';

runTestGroup({
  name: 'Superscribed mono-syllables',
  tests: [
    // Rago
    { tibetan: 'རྐ',  converted: 'ka'},
    { tibetan: 'རྒ',  converted: 'ga'},
    { tibetan: 'རྔ',  converted: 'nga'},
    { tibetan: 'རྗ',  converted: 'ja'},
    { tibetan: 'རྙ',  converted: 'nya'},
    { tibetan: 'རྟ',  converted: 'ta'},
    { tibetan: 'རྡ',  converted: 'da'},
    { tibetan: 'རྣ',  converted: 'na'},
    { tibetan: 'རྦ',  converted: 'ba'},
    { tibetan: 'རྨ',  converted: 'ma'},
    { tibetan: 'རྩ',  converted: 'tsa'},
    { tibetan: 'རྫ',  converted: 'dza'},
    // Lago
    { tibetan: 'ལྐ',  converted: 'ka'},
    { tibetan: 'ལྒ',  converted: 'ga'},
    { tibetan: 'ལྔ',  converted: 'nga'},
    { tibetan: 'ལྕ',  converted: 'cha'},
    { tibetan: 'ལྗ',  converted: 'ja'},
    { tibetan: 'ལྟ',  converted: 'ta'},
    { tibetan: 'ལྡ',  converted: 'da'},
    { tibetan: 'ལྤ',  converted: 'pa'},
    { tibetan: 'ལྦ',  converted: 'ba'},
    { tibetan: 'ལྷ',  converted: 'lha'},
    // Sago
    { tibetan: 'སྐ',  converted: 'ka'},
    { tibetan: 'སྒ',  converted: 'ga'},
    { tibetan: 'སྔ',  converted: 'nga'},
    { tibetan: 'སྙ',  converted: 'nya'},
    { tibetan: 'སྟ',  converted: 'ta'},
    { tibetan: 'སྡ',  converted: 'da'},
    { tibetan: 'སྣ',  converted: 'na'},
    { tibetan: 'སྤ',  converted: 'pa'},
    { tibetan: 'སྦ',  converted: 'ba'},
    { tibetan: 'སྨ',  converted: 'ma'},
    { tibetan: 'སྩ',  converted: 'tsa'},
    // A few of them mixed with vowals
    { tibetan: 'རྡི',  converted: 'di'},
    { tibetan: 'ལྗུ',  converted: 'ju'},
    { tibetan: 'སྦེ',  converted: 'bé'},
    { tibetan: 'སྒོ',  converted: 'go'},
    { tibetan: 'ལྷུ',  converted: 'lhu'}
  ]
})