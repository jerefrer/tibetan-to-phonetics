import _ from 'underscore';
import TibetanNormalizer from 'tibetan-normalizer';
import { TibetanSyllableParser } from 'tibetan-syllable-parser';

/*-----------------------------------------------------------------------------
| Each line is made of:
|
| - some text in single quotes  <= The internal code used by the app. Leave it.
|                                  (Usually it is the wylie transliteration)
|
| - a colon                     <= If you forget any colon, the app won't work.
|
| - some text in single         <= How it will be converted in the end.
|   or double quotes               If the text includes single quotes,
|                                  then it is wrapped in double quotes.
|
| - a comma                     <= If you forget any comma, the app won't work.
|
| For instance, ཁྱེན will be converted by replacing each part one by one,
| using these rules:
|
| - khaYata         => 'khy'
| - drengbuMaNaRa   => 'e'
| - naSuffix        => 'n'
|
| Resulting in 'khyen'.
-----------------------------------------------------------------------------*/

const baseRules = {

  // End equals start (sang-gyé, tak-ki, ...)
    // Value can be 'merge', 'dash', 'space', or 'leave'
  'endEqualsStart': 'dash',

  // End link char (as in pa-o or be-u)
  'endLinkChar': '-',

  // Vowels
  'a': 'a',                // འ
  'i': 'i',                // འི
  'o': 'o',                // འོ
  'u': 'u',                // འུ
  'ü': 'ü',                // འུས
  'ö': 'ö',                // འོས
  'drengbu': 'é',          // འེ
  'drengbuMaNaRa': 'e',    // མཁྱེན་ / drengbu and suffix ma, na, ra
  'drengbuGaBaLaNga': 'e', // འཕྲེང་ / drengbu and suffix ga, ba, la, nga
  'aNa': 'e',              // རྒྱན་  / no vowel and suffix na
  'aLa': 'a',              // རྒྱལ་  / no vowel and suffix la
  'aKikuI': "a'i",         // པའི

  // Regular consonants
  'ka': 'k',               // ཀ
  'kha': 'kh',             // ཁ
  'ga': 'k',               // ག
  'nga': 'ng',             // ང
  'ca': 'ch',              // ཅ
  'cha': "ch'",            // ཆ
  'ja': 'ch',              // ཇ
  'nya': 'ny',             // ཉ
  'ta': 't',               // ཏ
  'tha': 'th',             // ཐ
  'da': 't',               // ད
  'na': 'n',               // ན
  'pa': 'p',               // པ
  'pha': "p'",             // ཕ
  'ba': 'p',               // བ
  'ma': 'm',               // མ
  'tsa': 'ts',             // ཙ
  'tsha': "ts'",           // ཚ
  'dza': 'dz',             // ཛ
  'wa': 'w',               // ཝ
  'zha': 'zh',             // ཞ
  'za': 's',               // ཟ
  'ya': 'y',               // ཡ
  'ra': 'r',               // ར
  'la': 'l',               // ལ
  'sha': 'sh',             // ཤ
  'sa': 's',               // ས
  'ha': 'h',               // ཧ

  // Modified consonants (with prefix or superscribed)
  'gaMod': 'g',            // རྒ
  'jaMod': 'j',            // རྗ
  'daMod': 'd',            // རྡ
  'baMod': 'b',            // རྦ
  'zaMod': 'z',            // བཟའ

  // Ratas
  'rata1': 'tr',           // ཏྲ  / 1st col with rata
  'rata2': "tr'",          // ཁྲ  / 2nd col with rata
  'rata3': 'tr',           // བྲ  / 3rd col with rata
  'rata3Mod': 'dr',        // སྒྲ / 3rd col with rata and prefix/superscribed
  'hra': 'hr',             // ཧྲ

  // Yatas
  'kaYata': 'ky',          // ཀྱ
  'khaYata': 'khy',        // ཁྱ
  'gaYata': 'ky',          // གྱ
  'gaModYata': 'gy',       // སྒྱ / ga with yata and prefix/superscribed
  'paYata': 'ch',          // པྱ
  'phaYata': "ch'",        // ཕྱ
  'baYata': 'ch',          // བྱ
  'baModYata': 'j',        // སྦྱ / ba with yata and prefix/superscribed
  'daoWaYata': 'y',        // དབྱ

  // Latas
  'lata': 'l',             // གླ
  'lataDa': 'd',           // ཟླ

  // Special cases
  'lha': 'lh',             // ལྷ
  'baAsWa': 'w',           // དགའ་བ་

  // Suffixes
  'kaSuffix': 'k',         // དག
  'ngaSuffix': 'ng',       // དང
  'naSuffix': 'n',         // དན
  'baSuffix': 'p',         // དབ
  'maSuffix': 'm',         // དམ
  'raSuffix': 'r',         // དར
  'laSuffix': 'l',         // དལ

};

/*-----------------------------------------------------------------------------
| Each line is made of:
|
| - some text in single quotes  <= The internal code used by the app. Leave it.
|                                  (Usually it is the wylie transliteration)
|
| - a colon                     <= If you forget any colon, the app won't work.
|
| - some text in single         <= How it will be converted in the end.
|   or double quotes               If the text includes single quotes,
|                                  then it is wrapped in double quotes.
|
| - a comma                     <= If you forget any comma, the app won't work.
|
| For instance, ཁྱེན will be converted by replacing each part one by one,
| using these rules:
|
| - khaYata         => 'khy'
| - drengbuMaNaRa   => 'e'
| - naSuffix        => 'n'
|
| Resulting in 'khyen'.
-----------------------------------------------------------------------------*/

const englishLoose = {

  id: 'english-loose',
  name: 'English (loose)',

  rules: {

    // Linking char (as in pa-o or pe-u)
    'endLinkChar': "'",

    // Vowels
    'aKikuI': 'é',              // པའི

    // Regular consonants
    'ga': 'g',                  // ག
    'cha': 'ch',                // ཆ
    'ba': 'p',                  // བ
    'tsha': 'ts',               // ཚ
    'ja': 'j',                  // ཇ
    'da': 'd',                  // ད
    'pha': 'p',                 // ཕ
    'ba': 'b',                  // བ
    'zha': 'sh',                // ཞ

    // Ratas
    'rata2': 'tr',              // ཁྲ  // 2nd column with rata
    'rata3': 'dr',              // བྲ  // 3rd column with rata

    // Yatas
    'gaYata': 'gy',             // གྱ
    'phaYata': 'ch',            // ཕྱ
    'baYata': 'ch',             // བྱ

  },

  exceptions: {

  }

};

/*-----------------------------------------------------------------------------
| Each line is made of:
|
| - some text in single quotes  <= The internal code used by the app. Leave it.
|                                  (Usually it is the wylie transliteration)
|
| - a colon                     <= If you forget any colon, the app won't work.
|
| - some text in single         <= How it will be converted in the end.
|   or double quotes               If the text includes single quotes,
|                                  then it is wrapped in double quotes.
|
| - a comma                     <= If you forget any comma, the app won't work.
|
| For instance, ཁྱེན will be converted by replacing each part one by one,
| using these rules:
|
| - khaYata         => 'khy'
| - drengbuMaNaRa   => 'e'
| - naSuffix        => 'n'
|
| Resulting in 'khyen'.
-----------------------------------------------------------------------------*/

const englishSemiStrict = {

  id: 'english-semi-strict',
  name: 'English (semi-strict)',

  rules: {

    // Vowels
    'aKikuI': 'é',           // པའི

    // Regular consonants
    'cha': 'ch',             // ཆ
    'tsha': 'ts',            // ཚ

    // Yatas
    'phaYata': 'ch',         // ཕྱ
    'baYata': 'ch',          // བྱ

  },

  exceptions: {

  }

};

/*-----------------------------------------------------------------------------
| Each line is made of:
|
| - some text in single quotes  <= The internal code used by the app. Leave it.
|                                  (Usually it is the wylie transliteration)
|
| - a colon                     <= If you forget any colon, the app won't work.
|
| - some text in single         <= How it will be converted in the end.
|   or double quotes               If the text includes single quotes,
|                                  then it is wrapped in double quotes.
|
| - a comma                     <= If you forget any comma, the app won't work.
|
| For instance, ཁྱེན will be converted by replacing each part one by one,
| using these rules:
|
| - khaYata         => 'khy'
| - drengbuMaNaRa   => 'e'
| - naSuffix        => 'n'
|
| Resulting in 'khyen'.
-----------------------------------------------------------------------------*/

const englishStrict = {

  id: 'english-strict',
  name: 'English (strict)',

  rules: {

  },

  exceptions: {

  }

};

/*-----------------------------------------------------------------------------
| Each line is made of:
|
| - some text in single quotes  <= The internal code used by the app. Leave it.
|                                  (Usually it is the wylie transliteration)
|
| - a colon                     <= If you forget any colon, the app won't work.
|
| - some text in single         <= How it will be converted in the end.
|   or double quotes               If the text includes single quotes,
|                                  then it is wrapped in double quotes.
|
| - a comma                     <= If you forget any comma, the app won't work.
|
| For instance, ཁྱེན will be converted by replacing each part one by one,
| using these rules:
|
| - khaYata         => 'khy'
| - drengbuMaNaRa   => 'e'
| - naSuffix        => 'n'
|
| Resulting in 'khyen'.
-----------------------------------------------------------------------------*/

const french = {

  id: 'french',
  name: 'French',

  rules: {

    'doubleS': true,

    // Vowels
    'u': 'ou',               // འུ
    'ü': 'u',                // འུས
    'ö': 'eu',               // འོས
    'aKikuI': 'é',           // པའི

    // Regular consonants
    'ca': 'tch',             // ཅ
    'cha': "tch'",           // ཆ
    'ja': 'dj',              // ཇ
    'tha': "t'",             // ཐ
    'ba': 'p',               // བ
    'tsha': "ts'",           // ཚ
    'sha': 'ch',             // ཤ
    'zha': 'sh',             // ཞ

    // Modified consonants (with prefix or superscribed)
    'jaMod': 'dj',           // རྗ
    'gaMod': 'gu',           // རྒ

    // Ratas
    'rata2': "t'r",          // ཁྲ  / 2nd col with rata

    // Yatas
    'gaModYata': 'gui',      // སྒྱ / ga with yata and prefix/superscribed
    'paYata': 'tch',         // པྱ
    'phaYata': "tch'",       // ཕྱ
    'baYata': "tch'",        // བྱ
    'baModYata': 'dj',       // སྦྱ / ba with yata and prefix/superscribed

  },

  exceptions: {

  }

};

/*-----------------------------------------------------------------------------
| Each line is made of:
|
| - some text in single quotes  <= The internal code used by the app. Leave it.
|                                  (Usually it is the wylie transliteration)
|
| - a colon                     <= If you forget any colon, the app won't work.
|
| - some text in single         <= How it will be converted in the end.
|   or double quotes               If the text includes single quotes,
|                                  then it is wrapped in double quotes.
|
| - a comma                     <= If you forget any comma, the app won't work.
|
| For instance, ཁྱེན will be converted by replacing each part one by one,
| using these rules:
|
| - khaYata         => 'khy'
| - drengbuMaNaRa   => 'e'
| - naSuffix        => 'n'
|
| Resulting in 'khyen'.
-----------------------------------------------------------------------------*/

const spanish = {

  id: 'spanish',
  name: 'Spanish',

  rules: {

    // Vowels
    'ü': 'u',                // འུས
    'ö': 'o',                // འོས
    'drengbu': 'e',          // འེ
    'aKikuI': 'e',           // འི

    // Regular consonants
    'kha': 'k',              // ཁ
    'cha': 'ch',             // ཆ
    'nya': 'ñ',              // ཉ
    'tha': 't',              // ཐ
    'pha': 'p',              // ཕ
    'ba': 'p',               // བ
    'tsha': 'ts',            // ཚ
    'dza': 'ds',             // ཛ
    'zha': 'sh',             // ཞ

    // Modified consonants (with prefix or superscribed)
    'gaMod': 'gu',           // གཇ
    'jaMod': 'y',            // རྗ
    'zaMod': 's',            // བཟ

    // Ratas
    'rata2': 'tr',           // ཁྲ  / 2nd col with rata

    // Yatas
    'gaModYata': 'gui',      // སྒྱ / ga with yata and prefix/superscribed
    'paYata': 'ch',          // པྱ
    'phaYata': 'ch',         // ཕྱ
    'baYata': 'ch',          // བྱ
    'baModYata': 'y',        // སྦྱ / ba with yata and prefix/superscribed

  },

  exceptions: {
    'ཁ་ཊྭཾ་ག': 'kat_vam_ga'
  }

};

//  ka  / kha  / ga  become ga
//  bha / cha  / ja  become cha
//  ta  / tha  / da  become ta
//  pa  / pha  / ba  become pa
//  kya / khya / gya become gya
//  sa  / za         become sa
//  tra / dra        become tra

const englishSuperLoose = {

  id: 'english-super-loose',
  name: 'English SuperLoose (for phonetic search)',

  rules: {

    // End equals start (sang-gyé, tak-ki, ...)
    // Value can be 'merge', 'dash', 'space', or 'leave'
    'endEqualsStart': 'merge',

    // Linking char (as in pa-o or pe-u)
    'endLinkChar': "'",

    // Vowels
    'ü': 'u',                // འུས
    'ö': 'o',                // འོས
    'drengbu': 'e',          // འེ
    'drengbuMaNaRa': 'e',    // མཁྱེན་ / drengbu and suffix ma, na, ra
    'drengbuGaBaLaNga': 'e', // འཕྲེང་ / drengbu and suffix ga, ba, la, nga
    'aNa': 'e',              // རྒྱན་  / no vowel and suffix na
    'aLa': 'e',              // རྒྱལ་  / no vowel and suffix la
    'aKikuI': "e",           // པའི

    // Regular consonants
    'ka':  'g',               // ཀ
    'kha': 'g',               // ཁ
    'tha': 't',               // ཐ
    'ga': 'g',               // ག
    'ba': 'p',               // བ
    'cha': 'ch',             // ཆ
    'tsha': 'ts',            // ཚ
    'da': 't',               // ད
    'pha': 'p',              // ཕ
    'zha': 'sh',             // ཞ
    'dza': 'ts',             // ཛ

    // Modified consonants (with prefix or superscribed)
    'gaMod': 'g',            // རྒ
    'jaMod': 'ch',           // རྗ
    'daMod': 't',            // རྡ
    'baMod': 'p',            // རྦ
    'zaMod': 's',            // བཟ

    // Ratas
    'rata1': 'tr',           // ཏྲ  / 1st col with rata
    'rata2': 'tr',           // ཁྲ  / 2nd col with rata
    'rata3': 'tr',           // བྲ  / 3rd col with rata
    'rata3Mod': 'tr',        // སྒྲ / 3rd col with rata and prefix/superscribed
    'hra': 'hr',             // ཧྲ

    // Yatas
    'kaYata': 'g',           // ཀྱ
    'khaYata': 'g',          // ཁྱ
    'gaYata': 'g',           // གྱ
    'gaModYata': 'g',        // སྒྱ / ga with yata and prefix/superscribed
    'paYata': 'ch',          // པྱ
    'phaYata': 'ch',         // ཕྱ
    'baYata': 'ch',          // བྱ
    'baModYata': 'ch',       // སྦྱ / ba with yata and prefix/superscribed
    'daoWaYata': 'y',        // དབྱ

    // Latas
    'lata': 'l',             // གླ
    'lataDa': 't',           // ཟླ

    // Special cases
    'lha': 'l',              // ལྷ
    'baAsWa': 'p'

  },

  exceptions: {

  }

};

var defaultSettings$1 = [];

defaultSettings$1.push(englishLoose);
defaultSettings$1.push(englishSemiStrict);
defaultSettings$1.push(englishStrict);
defaultSettings$1.push(french);
defaultSettings$1.push(spanish);
defaultSettings$1.push(englishSuperLoose);

const removeMuteCharsAndNormalize = function (tibetan) {
  var normalized = TibetanNormalizer.normalize(tibetan);
  return normalized
    .replace(/[༵\u0F04-\u0F0A\u0F0D-\u0F1F\u0F3A-\u0F3F\u0FBE-\uF269]/g, '').trim()
    .replace(/[༔ཿ]/g, '་')
    .replace(/[ྃྂ]/g, 'ཾ')
    .replace(/་$/g, '');
};

// Copied from Sugar

String.prototype.first = function(num) {
  if (num == undefined) num = 1;
  return this.substr(0, num);
};

String.prototype.last = function(num) {
  if (num == undefined) num = 1;
  var start = this.length - num < 0 ? 0 : this.length - num;
  return this.substr(start);
};

String.prototype.capitalize = function(all) {
  var lastResponded;
  return this.toLowerCase().replace(all ? /[^']/g : /^\S/, function(lower) {
    var upper = lower.toUpperCase(), result;
    result = lastResponded ? lower : upper;
    lastResponded = upper !== lower;
    return result;
  });
};

String.prototype.to = function(num) {
  if(num == undefined) num = this.length;
  return this.slice(0, num);
};

String.prototype.pad = function(num, padding) {
  var half, front, back;
  num   = checkRepeatRange(num);
  half  = Math.max(0, num - this.length) / 2;
  front = Math.floor(half);
  back  = Math.ceil(half);
  return padString(front, padding) + this + padString(back, padding);
};

function checkRepeatRange(num) {
  num = +num;
  if(num < 0 || num === Infinity) {
    throw new RangeError('Invalid number');
  }
  return num;
}

function padString(num, padding) {
  return repeatString(padding !== undefined ? padding : ' ', num);
}

function repeatString(str, num) {
  var result = '', str = str.toString();
  while (num > 0) {
    if (num & 1) {
      result += str;
    }
    if (num >>= 1) {
      str += str;
    }
  }
  return result;
}

function deepClone(object) {
  return JSON.parse(JSON.stringify(object));
}

const defaultSettingId = 'english-semi-strict';

const defaultsMissingRulesToBaseRules = function(setting) {
  setting.isDefault = true;
  _(setting.rules).defaults(baseRules);
  return setting;
};

const defaultSettings =
  defaultSettings$1.map((setting) => defaultsMissingRulesToBaseRules(setting));

const Settings = {
  defaultSettings: defaultSettings,
  defaultSettingId: defaultSettingId,
  settings: defaultSettings,
  all () {
    return this.settings;
  },
  default() {
    return this.find(this.defaultSettingId);
  },
  originalDefault() {
    return this.findOriginal(this.defaultSettingId);
  },
  find: function(settingId, options = {}) {
    if (!settingId) return;
    if (settingId.toString().match(/^\d*$/)) settingId = parseInt(settingId);
    return _(this.settings).findWhere({ id: settingId });
  },
  findOriginal: function(settingId, options = {}) {
    var setting = _(defaultSettings).findWhere({ id: settingId });
    return defaultsMissingRulesToBaseRules(setting);
  },
  update(settingId, name, rules, exceptions) {
    var setting = this.find(settingId);
    setting.name = name;
    setting.rules = rules;
    setting.exceptions = exceptions;
    this.updateStore();
  },
  create (fromSetting, name) {
    var id = this.maxId() + 1;
    this.settings.push({
      id: id,
      isCustom: true,
      isEditable: true,
      name: name || 'Rule set ' + id,
      rules: _(fromSetting && deepClone(fromSetting.rules) || {}).defaults(baseRules),
      exceptions: fromSetting && deepClone(fromSetting.exceptions) || {}
    });
    this.updateStore();
  },
  copy(setting) {
    this.create(setting, 'Copy of ' + setting.name);
  },
  import(setting) {
    this.create(setting, setting.name);
  },
  delete(setting) {
    this.settings = _(this.settings).without(setting);
    this.updateStore();
    Storage.get('selectedSettingId', undefined, (value) => {
      if (value == setting.id)
        Storage.set('selectedSettingId', defaultSettingId);
    });
  },
  replaceAllWith(newSettings) {
    this.settings = newSettings;
  },
  reset(callback) {
    this.settings = this.defaultSettings;
    this.updateStore(callback);
  },
  maxId () {
    return (
      this.settings
        .filter((setting) => _(setting.id).isNumber())
        .max('id') ||
      { id: 0 }
    ).id;
  },
  updateStore(callback) {
    Storage.set('settings', this.settings, (value) => {
      if (callback) callback(value);
    });
  },
  numberOfSpecificRules (setting) {
    return _(setting.rules)
      .filter((value, key) => baseRules[key] != value)
      .length;
  }
};

/*----------------------------------------------------------------------------
| Each line defines one exception.
|
| If any of the values on the left of the colon is found in the line to be
| converted, then it will be treated as if it was the value on the right
| of the colon.
|
| Tibetan characters will be converted as they would be normally.
| Latin characters will be inserted as-is within the transliteration.
|
| If using Latin characters, then between each syllable you need to add an
| underscore to help the system determine how many syllables the word is made
| of, even if it does not exactly match how the word is composed.
|
| For instance if you want to have སངས་རྒྱས་ always converted as 'sangye',
| you would do:
|
| 'སངས་རྒྱས': 'san_gye'
| but not
| 'སངས་རྒྱས': 'sang_gye'
|
| If a line is defined with a left value that is included in another line with
| a longer left value, then the longer one will be used.
|
| For instance if these two rules are defined:
|
| 'སངས': 'SAN'
| 'སངས་རྒྱས': 'san_GYE'
|
| Then སངས་རྒྱས་ would be converted as sanGYE,  ignoring the first rule.
----------------------------------------------------------------------------*/

const defaultGeneralExceptions = {

  // Mute suffixes
  'བདག': 'སྡ',
  'ཤོག': 'ཤོ',

  // Links between syllables
  'ཡ་མཚན': 'ཡམ་མཚན',
  'གོ་འཕང': 'གོམ་འཕང',
  'ཨོ་རྒྱན': 'ཨོར་རྒྱན',
  'རྒྱ་མཚོ': 'རྒྱམ་མཚོ',
  'མཁའ་འགྲོ': 'མཁའn_འགྲོ',
  'མཁའ་འགྲོའི': 'མཁའn_འགྲོའི',
  'མཁའ་འགྲོས': 'མཁའn_འགྲོས',
  'རྗེ་འབངས': 'རྗེམ་འབངས',
  'དགེ་འདུན': 'དགེན་འདུན',
  'འཕྲོ་འདུ': 'འཕྲོn_འདུ',
  'མི་འགྱུར': 'མིན་འགྱུར',
  'རྒྱ་མཚོའི': 'རྒྱམ་མཚོའི',
  'མཆོད་རྟེན': 'མཆོར་རྟེན',
  'སྤྲོ་བསྡུ': 'སྤྲོn_འདུ',
  'འོད་མཐའ་ཡས': 'འོན་མཐའ་ཡས',
  'རྡོ་རྗེ': 'རྡོར་རྗེ',
  'རྟ་མགྲིན': 'རྟམ་མགྲིན',
  'བཀའ་འགྱུར་': 'བཀའn་འགྱུར་',
  'ན་བཟའ་': 'ནམ་བཟའ་',
  'མ་འགགས་': 'མn་འགགས་',

  // Complicated spacing
  'ལ་གསོལ་བ་འདེབས': 'ལ་ གསོལ་བ་ འདེབས',

  // Mistakes that become so common we keep them
  'རབ་འབྱམས': 'རb_འབྱམས',

  // People and places
  'སྤྱན་རས་གཟིགས': 'སྤྱན་རས་གཟི',
  'ཚེ་དཔག་མེད': 'ཚེ་པ་མེད',

  // Sanskrit stuff
  'ༀ': 'ཨོམ ',
  'ཨཱ': 'འh ',
  'ཧཱུཾ': 'hའུང ',
  'བྷྲཱུཾ': 'bhrའུམ',
  'ཧྲཱི': 'ཧྲི ',
  'མ་ཎི': 'ma_ni',
  'རཾ་ཡཾ་ཁཾ': 'ram yam kham ',
  'ཧ་ཧོ་ཧྲཱི': 'ha ho hri ',
  'ཨ་ཨ་ཨ།': 'a a a ',
  'ཀྲི་ཡ': 'kri_ya',
  'ཨུ་པ': 'u_pa',
  'ཡོ་ག': 'yo_ga',
  'མ་ཧཱ': 'ma_ha',
  'ཨ་ནུ': 'a_nu',
  'ཨ་ཏི': 'a_ti',
  'བཾ': 'bam ',
  'ཨཾ': 'ang ',
  'ཀརྨ': 'ཀར་མ',
  'དྷུ': 'dhའུ',
  'དྷི': 'dhའི',
  'དྷ': 'dhའ',
  'བྷ': 'bh',
  'བྷ་ག': 'bhའ_རྒ',
  'བཛྲ': 'va_jra',
  'ཏནྟྲ': 'tan_tra',
  'སིདྡྷི': 'sid_dhi',
  'ཛྙཱ': 'རྒྱ',
  'པདྨ': 'པd_མ',
  'པདྨོ': 'པd_མོ',
  'པདྨེ': 'པd_མེ',
  'པཎྜི': 'པn_སྡི',
  'པཎྜིཏ': 'པn_སྡི_ཏ',
  'བཾ་རོ': 'བམ་རོ',
  'ཤྲཱི': 'ཤི་རི',
  'གུ་རུ': 'gའུ་རུ',
  'ཨུཏྤལ': 'ཨུt_པལ',
  'ཏདྱཐཱ': 'tའd_ཡ_ཏ',
  'སྭསྟི': 'svའ_stའི',
  'སྭ་སྟི': 'svའ_stའི',
  'ཝཱ་རཱ་ཧཱི': 'ཝ_ར_ཧི',
  'ཁ་ཊྭཾ་ག': 'ཀ_ཏང_ཀ',
  'ཨེ་མ་ཧོ': 'ཨེ_མ_ཧོ',
  'གུ་རུ': 'སྒུ་རུ',
  'སམྦྷ་ཝར': 'སམ_bhའ_ཝར',
  'དིཔྟ་ཙཀྲ': 'dའི_ptའ tsའk_trའ',
  'ཀྲོསྡ': 'krའོ_dhའ',
  'ༀ་ཨ་ར་པ་ཙ་ན་སྡིཿསྡིཿསྡིཿ': 'ༀ ཨ ར པ ཙ ན རྡི རྡི རྡི',
  'སརྦ': 'sའr_wའ',
  'བྷུ': 'bhའུ',
  'ས་པ་རི་ཝཱ་ར': 'ས་པ་རི་ཝ་ར',
  'ས་མ་ཡ': 'ས་མ་ཡ',
  'ས་མ་ཡ་ཛཿ': 'ས་མ་ཡ ཛ',
  'འལ་འོལ': 'འལ_-འོལ',
  'ཏིཥྛ་ལྷན༔': 'tish_tha lhan',
  'ཨ་ཏི་པཱུ་ཧོཿ': 'a_ti_pའུ ho',
  'པྲ་ཏཱིཙྪ་ཧོཿ': 'pra_ti_tsa ho',
  'ཨརྒྷཾ': 'ar_gham',
  'པཱ་དྱཾ': 'pa_dyam',
  'པུཥྤེ': 'pའུsh_པེ',
  'དྷཱུ་པེ': 'dhའུ_པེ',
  'ཨཱ་ལོ་ཀེ': 'a_lo_ཀེ',
  'གནྡྷེ': 'gan_dhཨེ',
  'ནཻ་ཝི་དྱ': 'nai_win_dyའེ',
  'ནཻ་ཝི་ཏྱ': 'nai_win_dyའེ',
  'ཤཔྡ': 'sha_pta',
  'པྲ་ཏཱིཙྪ་': 'pra_ti_tsa ',
  'པྲ་ཏཱིཙྪ་ཡེ': 'pra_ti_tsa_yའེ',
  'སྭཱ་ཧཱ': 'sva_ha',
  'སྭཱཧཱ': 'sva_ha',
  'དྷརྨ': 'dhar_ma',
  'དྷརྨཱ': 'dhar_ma',
  'དྷརྨ་པཱ་ལ': 'dhar_ma_pa_la',
  'དྷརྨཱ་པཱ་ལ': 'dhar_ma_pa_la',
  'ཨི་དཾ': 'i_dam',
  'བ་ལིངྟ': 'ba_ling_ta',
  'བ་ལིཾ་ཏ': 'ba_ling_ta',
  'པཉྩ': 'pañ_tsa',
  'ཨ་མྲྀ་ཏ': 'am_ri_ta',
  'ཨམྲྀ་ཏ': 'am_ri_ta',
  'ཀུཎྜ་ལཱི': 'kའུn_da_li',
  'རཀྟ': 'rak_ta',
  'པཱུ་ཛ': 'pའུ_ja',
  'ཁ་ཁ་ཁཱ་ཧི་ཁཱ་ཧི': 'kha kha kha_hi kha_hi',
  'མཎྜལ': 'man_da_la',
  'མཎྜ་ལ': 'man_da_la',
  'ཤྲཱི': 'shi_ri',
  'དྷེ་ཝ': 'dé_wa',
  'ཤཱནྟ': 'shen_ta',
  'ཀྲོ་དྷ': 'kro_dha',
  'དྷ་ཀ': 'སྡ_ཀ',
  'དྷཱ་ཀི་ནཱི': 'སྡ_ཀི_ནི',
  'ཌཱཀྐི་ནི': 'སྡ_ཀི_ནི',
  'ཌཱ་ཀི་ནཱི་': 'སྡ_ཀི_ནི',
  'དྷཱ་ཀི': 'སྡ_ཀི',
  'ཌཱ་ཀི': 'སྡ_ཀི',
  'ཌཱཀྐི': 'སྡ_ཀི',
  'འོག་མིན': 'འོ་མིན',
  'བ་སུ་དེ་ཝ': 'wa_sའུ dé_wa',
  'ནཱི་དྷི་པ་ཏི': 'ni_dhi_pa_ti',
  'བྷཱུ་མི་པ་ཏི': 'bhའུ_mi_pa_ti',
  'མ་ཧཱ་ཀཱ་ལ': 'ma_ha_ka_la',
  'མ་ཧཱ་ཀཱ་ལཱ': 'ma_ha_ka_la_ya',
  'ཏ་ཐཱ་ག་ཏ': 'ta_tha_ga_ta',
  'བྷྱོ': 'ba_yo',
  'བི་ཤྭ': 'bi_shའུ',
  'མུ་ཁེ་བྷྱ': 'mའུ_ké_bé',
  'ཨུདྒཏེ': 'འུt_ga_té',
  'སྥར': 'sa_par',
  'སྥ་ར་ཎ': 'ས_པ_ར_ན',
  'ག་ག་ན་ཁཾ': 'སྒ_སྒ_ན ཁམ',
  'ཏིཥྛ': 'tish_tha',
  'ཏིཥྛནྟུ': 'tish_then_tའུ',
  'ཀཱ་ཝཱ་ཙི': 'ཀ ཝ ཙི',
  'ཝཱཀ': 'ཝ_ཀ',
  'ཙིཏྟ': 'ཆི_tཏ',
  'རཀྵ': 'རk_ཤ',
  'བོ་དྷི': 'སྦོ_དྷི',
  'པཱཀྵ': 'པཱk_ཤ',
  'པུཎྱཻ་': 'པུ_ཉེ',
  'སྭ་བྷཱ་ཝ': 'so_bha_wa',
  'ཤུདྡྷྭ': 'shའུd_do',
  'ཤུདྡྷོ': 'shའུd_do',
  'ཤུདྡྷོ྅ཧཾ': 'shའུd_do hang',
  'ཀ་མ་ལཱ་ཡེ': 'ka_ma_la yé',
  'སྟྭཾ': 'tam',
  'རཏྣ': 'rat_na',
  'ཨཱརྻ': 'a_rya',
  'ཨཱརྻཱ': 'a_rya',
  'ཨཱརྱ': 'a_rya',
  'ཨཱརྱཱ': 'a_rya',
  'པདྨཱནྟ': 'pad_man_ta',
  'ཀྲྀཏ': 'krit ',
  'ཧྱ་གྲཱྀ་ཝ': 'ha_ya gri_wa',
  'བིགྷྣཱན': 'bi_gha_nen',
  'ཧ་ན་ཧ་ན་': 'hana hana',
  'ཕཊ྄': 'phet',
  'ཕཊ': 'phet',
  'མཉྫུ་གྷོ་ཥ': 'man_ju_go_sha',
  'དྷརྨཱ་ཎཾ': 'dhar_ma nam',
  'ཨ་ཀཱ་རོ': 'a_ka_ro',
  'ཨཱདྱ་ནུཏྤནྣ': 'adi anütpena',
  'ཏོཏྟ': 'to_ta',
  'ཏུཏྟཱ': 'tut_ta',
  'ཏུཏྟཱ་ར': 'tut_ta_ra',
  'རསྟུ': 'ར_sཏུ',
  'བཻ་ཌཱུརྻ': 'ben_du_rya',
  'སེངྒེ': 'སེང་སྒེ',
  'བྷནྡྷ': 'bhan_dha',
  'ས་དྷཱུ་': 'sa_dhཨུ',
  'རཀ': 'rak',
  'བྷ་ལིཾ་ཏ': 'ba_ling_ta',
  'དེ་བཱི': 'dé_vi',
  'ཤྭ་ན': 'ཤོ་ན',
  'ནཱ་གརྫུ་ན': 'na_gar_ju_na',
};

var t$1;

const normalize = function (exceptions) {
  return _(exceptions).inject((hash, value, key) => {
    if (key.trim().length) {
      var normalizedKey = removeMuteCharsAndNormalize(key);
      var normalizedValue = removeMuteCharsAndNormalize(value);
      if (normalizedKey != normalizedValue)
        hash[normalizedKey] = value;
    }
    return hash;
  }, {});
};

var generalExceptions = normalize(defaultGeneralExceptions);

var Exceptions = function(setting, converter, rulesUsed, exceptionsUsed) {
  t$1 = (key, track = true) => {
    var value = setting.rules[key];
    if (track)
      rulesUsed[key] = value;
    return value;
  };
  return {
    setting: setting,
    converter: converter,
    exceptionsUsed: exceptionsUsed,
    generalExceptions: generalExceptions,
    exceptions:
      _(_.clone(setting.exceptions)).defaults(generalExceptions),
    find (tibetan) {
      var exception;
      var phonetics;
      var spaceAfter = false;
      var modifiers = ['འོ', 'འི', 'ས', 'ར'];
      var modifier = undefined;
      var i = 0;
      while (!exception && i < modifiers.length) {
        var tibetanWithModifier = tibetan.match(new RegExp(`(.*)${modifiers[i]}$`));
        if (tibetanWithModifier) {
          var tibetanWithoutModifier = tibetanWithModifier[1];
          exception = this.tryException(tibetanWithoutModifier);
          if (exception)
            modifier = modifiers[i];
        }
        i++;
      }
      if (!exception)
        exception = this.tryException(tibetan);
      if (exception) {
        if (modifier) {
          if (modifier.match(/(འི|ས)/)) {
            if (exception.last() == 'a')
              exception = exception.to(-1) + t$1('drengbu');
            else if (exception.last() == 'o')
              exception = exception.to(-1) + t$1('ö');
            else if (exception.last() == 'u')
              exception = exception.to(-1) + t$1('ü');
            else if (!exception.last().match(/[ieéè]/))
              exception += modifier;
          } else if (modifier == 'ར') {
            if (exception.last().match(/[eéè]/))
              exception = exception.to(-1) + 'er';
            else if (exception.last().match(/[aiou]/))
              exception += 'r';
            else
              exception += modifier;
          } else if (modifier == 'འོ') {
              exception = exception + t$1('endLinkChar') + t$1('o');
          } else
            exception += modifier;
        }
        phonetics = this.convertTibetanParts(exception);
        phonetics = this.removeDuplicateEndingLetters(phonetics);
        spaceAfter = phonetics.last() == ' ';
        var numberOfSyllables = 1;
        var tsheks = tibetan.match(/་/g);
        var syllableMarkers = phonetics.trim().match(/[_ ]/g);
        if (syllableMarkers) numberOfSyllables = syllableMarkers.length + 1;
        return {
          spaceAfter: spaceAfter,
          numberOfSyllables: numberOfSyllables,
          numberOfShifts: tsheks ? tsheks.length : 0,
          converted: phonetics.trim().replace(/_/g, '')
        }
      }
    },
    tryException (key) {
      var exception = this.exceptions[key];
      if (exception) {
        this.exceptionsUsed[key] = exception;
        return exception;
      }
    },
    removeDuplicateEndingLetters (text) {
      return text.replace(/(.?)\1*$/, '$1');
    },
    convertTibetanParts (text) {
      var nonTibetanChars = new RegExp(/[\-\_\' a-zA-ZⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯBⒷＢḂḄḆɃƂƁCⒸＣĆĈĊČÇḈƇȻꜾDⒹＤḊĎḌḐḒḎĐƋƊƉꝹEⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎFⒻＦḞƑꝻGⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾHⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍIⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗJⒿＪĴɈKⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢLⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀMⓂＭḾṀṂⱮƜNⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤOⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌPⓅＰṔṖƤⱣꝐꝒꝔQⓆＱꝖꝘɊRⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂSⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄTⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆUⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄVⓋＶṼṾƲꝞɅWⓌＷẀẂŴẆẄẈⱲXⓍＸẊẌYⓎＹỲÝŶỸȲẎŸỶỴƳɎỾZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢaⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐbⓑｂḃḅḇƀƃɓcⓒｃćĉċčçḉƈȼꜿↄdⓓｄḋďḍḑḓḏđƌɖɗꝺeⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝfⓕｆḟƒꝼgⓖｇǵĝḡğġǧģǥɠꞡᵹꝿhⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥiⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨıjⓙｊĵǰɉkⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣlⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇmⓜｍḿṁṃɱɯnⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥoⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵpⓟｐṕṗƥᵽꝑꝓꝕqⓠｑɋꝗꝙrⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃsⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛtⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇuⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉvⓥｖṽṿʋꝟʌwⓦｗẁẃŵẇẅẘẉⱳxⓧｘẋẍyⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿzⓩｚźẑżžẓẕƶȥɀⱬꝣǼǢꜺǄǅǽǣꜻǆ]+/);
      var nonTibetanPart = text.match(nonTibetanChars);
      if (nonTibetanPart) {
        var result = this.tr(text.slice(0, nonTibetanPart.index)) + nonTibetanPart[0];
        var rest = text.slice(nonTibetanPart.index + nonTibetanPart[0].length);
        if (rest) return result + this.convertTibetanParts(rest);
        else      return result;
      } else
        return this.tr(text);
    },
    tr (word) {
      if (!word) return '';
      var tsheks = word.match(/་/);
      return (
        this.converter.convert(word).replace(/ /g, '') +
        ''.pad(tsheks ? tsheks.length : 0, '_')
      );
    }
  }
};

Exceptions.normalize = normalize;

Exceptions.reinitializeFromDefaults = function() {
  Exceptions.generalExceptions = Exceptions.normalize(defaultGeneralExceptions);
};

Exceptions.generalExceptionsAsArray = function() {
  return _(Exceptions.generalExceptions).map(function(value, key) {
    return { key: key, value: value }
  });
};

Exceptions.updateGeneralExceptions = function(exceptions, callback) {
  var normalizedExceptions = Exceptions.normalize(exceptions);
  Exceptions.generalExceptions = normalizedExceptions;
  Storage.set('general-exceptions', normalizedExceptions, (value) => {
    if (callback) callback(value);
  });
};

Exceptions.resetGeneralExceptions = function(callback) {
  this.updateGeneralExceptions(defaultGeneralExceptions, callback);
};

var syllablesWithUnknownConsonant = [];

var t, findException;

const TibetanToPhonetics = function(options = {}) {
  var setting = assignValidSettingOrThrowException(options.setting);
  var rulesUsed = {};
  var exceptionsUsed = {};
  t = (key, track = true) => {
    var value = setting.rules[key];
    if (track)
      rulesUsed[key] = value;
    return value;
  };
  var converter = {
    setting: setting,
    options: options,
    rulesUsed: rulesUsed,
    exceptionsUsed: exceptionsUsed,
    resetRulesUsed () {
      this.rulesUsed = rulesUsed = {};
    },
    resetExceptionsUsed () {
      this.exceptionsUsed = exceptionsUsed = {};
    },
    convert: function(tibetan, options) {
      tibetan = removeMuteCharsAndNormalize(tibetan);
      tibetan = this.substituteWordsWith7AsCheGo(tibetan);
      tibetan = this.substituteNumbers(tibetan);
      var groups = this.splitBySpacesOrNumbers(tibetan);
      return groups.map((tibetanGroup, index) => {
        if (tibetanGroup.match(/^\d+$/))
          return tibetanGroup;
        else {
          var group = new Group(tibetanGroup, rulesUsed).convert();
          if (options && options.capitalize || this.options.capitalize)
            group = group.capitalize();
          return group;
        }
      }).join(' ');
    },
    splitBySpacesOrNumbers (text) {
      return _(text.split(/(\d+)| /)).compact();
    },
    substituteNumbers (text) {
      _({
        '༠': '0', '༡': '1', '༢': '2', '༣': '3', '༤': '4',
        '༥': '5', '༦': '6', '༧': '7', '༨': '8', '༩': '9'
      }).each((arabic, tibetan) => {
        text = text.replace(new RegExp(tibetan, 'g'), arabic);
      });
      return text;
    },
    substituteWordsWith7AsCheGo (text) {
      return text.
        replace(/༧ཞབས/g, 'ཞབས').
        replace(/༧སྐྱབས/g, 'སྐྱབས');
    }
  };
  var exceptions = new Exceptions(setting, converter, rulesUsed, exceptionsUsed);
  findException = (text) => exceptions.find(text);
  return converter;
};

var Group = function(tibetan, rulesUsed) {
  return {
    tibetan: tibetan,
    group: '',
    convert: function() {
      var syllable;
      this.syllables = _.compact(tibetan.trim().split('་'));
      this.groupNumberOfSyllables = this.syllables.length;
      while (syllable = this.syllables.shift()) {
        var exception = this.findLongestException(syllable, this.syllables);
        if (exception) {
          this.group += exception.converted;
          if (exception.numberOfSyllables == 1) {
            if (exception.spaceAfter) this.group += ' ';
            this.handleSecondSyllable();
          } else
            this.group += ' ';
          this.shiftSyllables(exception.numberOfShifts);
        } else {
          if (this.isLastSyllableAndStartsWithBa(syllable))
            this.group += this.BaAsWaWhenSecondSyllable(syllable);
          else {
            var firstSyllableConverted = new Syllable(syllable).convert();
            if (this.handleSecondSyllable(firstSyllableConverted, syllable));
            else this.group += firstSyllableConverted;
          }
        }
      }
      return this.group.trim();
    },
    handleSecondSyllable: function(firstSyllableConverted, firstSyllableTibetan) {
      var secondSyllable = this.syllables.shift();
      if (secondSyllable) {
        var secondSyllableConverted;
        var secondException = this.findLongestException(secondSyllable, this.syllables);
        if (secondException) {
          this.shiftSyllables(secondException.numberOfShifts);
          secondSyllableConverted = secondException.converted;
        } else {
          var BaAsWaSyllableConverted;
          if (BaAsWaSyllableConverted = this.BaAsWaWhenSecondSyllable(secondSyllable))
            secondSyllableConverted = BaAsWaSyllableConverted;
          else
            secondSyllableConverted = new Syllable(secondSyllable).convert();
        }
        if (firstSyllableConverted) {
          if (this.AngOrAm(firstSyllableTibetan) || new Syllable(firstSyllableTibetan).endingO()) {
            this.group += firstSyllableConverted + ' ';
            // Because *-am is two syllables, we add back the second syllable
            // to the array and return so that it gets processed as the first
            // syllable of the next pair.
            this.syllables.unshift(secondSyllable);
            return true;
          }
          firstSyllableConverted = this.connectWithDashIfNecessaryForReadability(firstSyllableConverted, secondSyllableConverted);
          firstSyllableConverted = this.handleDuplicateConnectingLetters(firstSyllableConverted, secondSyllableConverted);
          firstSyllableConverted = this.handleDoubleS(firstSyllableConverted, secondSyllableConverted);
          this.group += firstSyllableConverted;
        }
        this.group += secondSyllableConverted + ' ';
        return true;
      }
    },
    findLongestException: function(syllable) {
      var restOfSyllables = this.syllables;
      if (!restOfSyllables.length)
        return findException(syllable);
      else {
        var exception;
        for (var index = restOfSyllables.length; index >= 0; index--) {
          var subset = [syllable].concat(restOfSyllables.slice(0, index));
          if (!exception) exception = findException(subset.join('་'));
        }
        return exception;
      }
    },
    isLastSyllableAndStartsWithBa (syllable) {
      if (this.groupNumberOfSyllables > 1 && this.syllables.length == 0)
        return this.BaAsWaWhenSecondSyllable(syllable);
    },
    BaAsWaWhenSecondSyllable (syllable) {
      if      (syllable == 'བ')   return t('baAsWa') + t('a');
      else if (syllable == 'བར')  return t('baAsWa') + t('a') + t('raSuffix');
      else if (syllable == 'བས')  return t('baAsWa') + t('drengbu');
      else if (syllable == 'བའི') return t('baAsWa') + t('aKikuI');
      else if (syllable == 'བའོ') return t('baAsWa') + t('a') + t('endLinkChar') + t('o');
      else if (syllable == 'བོ')  return t('baAsWa') + t('o');
      else if (syllable == 'བོར')  return t('baAsWa') + t('o') + t('raSuffix');
      else if (syllable == 'བོས') return t('baAsWa') + t('ö');
      else if (syllable == 'བོའི') return t('baAsWa') + t('ö');
      else if (syllable == 'བའམ') return t('baAsWa') + t('a') + t('endLinkChar') + t('a') + t('maSuffix');
      else if (syllable == 'བའང') return t('baAsWa') + t('a') + t('endLinkChar') + t('a') + t('ngaSuffix');
    },
    AngOrAm (tibetan) {
      return tibetan.match(/.+འ[ངམ]$/);
    },
    connectWithDashIfNecessaryForReadability: function(firstSyllable, secondSyllable) {
      var twoVowels = this.endsWithVowel(firstSyllable) && this.startsWithVowel(secondSyllable);
      var aFollowedByN = firstSyllable.last() == 'a' && secondSyllable.first() == 'n';
      var oFollowedByN = firstSyllable.last() == 'o' && secondSyllable.first() == 'n';
      var gFollowedByN = firstSyllable.last() == 'g' && secondSyllable.first() == 'n';
      if (twoVowels || aFollowedByN || oFollowedByN || gFollowedByN)
        return firstSyllable + '-';
      else
        return firstSyllable;
    },
    handleDuplicateConnectingLetters: function(firstSyllable, secondSyllable) {
      var sameLetter = firstSyllable.last() == secondSyllable.first();
      var endEqualsStartRule = t('endEqualsStart', false);
      if (sameLetter) {
        rulesUsed['endEqualsStart'] = true;
        if (endEqualsStartRule == 'dash')
          return firstSyllable + '-';
        else if (endEqualsStartRule == 'space')
          return firstSyllable + ' ';
        else if (endEqualsStartRule == 'merge')
          return firstSyllable.slice(0, firstSyllable.length-1);
      }
      return firstSyllable;
    },
    handleDoubleS: function(firstSyllable, secondSyllable) {
      if (
        t('doubleS', false) &&
        this.endsWithVowel(firstSyllable) &&
        secondSyllable.match(/^s[^h]/)
      ) {
        rulesUsed['doubleS'] = true;
        return firstSyllable + 's';
      } else
        return firstSyllable;
    },
    shiftSyllables: function(numberOfShifts) {
      var that = this;
      _(numberOfShifts).times(function() { that.syllables.shift(); });
    },
    startsWithVowel: function(string) {
      return string.match(/^[eo]?[aeiouéiöü]/);
    },
    endsWithVowel: function(string) {
      return string.match(/[eo]?[aeiouéiöü]$/);
    }
  }
};

var Syllable = function(syllable) {
  var parsed = new TibetanSyllableParser(syllable).parse();
  var object = _.omit(parsed, (_.functions(parsed)));
  return _(object).extend({
    syllable: syllable,
    convert: function() {
      var consonant = this.consonant();
      if (consonant == undefined) {
        syllablesWithUnknownConsonant.push(syllable);
        return '࿗';
      }
      return consonant + this.getVowel() + this.getSuffix() + this.endingO() + this.endingU()
    },
    consonant: function() {
      if (this.lata()) {
        if (this.root == 'ཟ')                        return t('lataDa');
        else                                         return t('lata');
      }
      if (this.daoWa()) {
        if      (this.yata())                        return t('daoWaYata');
        else if (this.vowel)                         return '';
        else                                         return t('wa');
      }
      switch(this.root) {
        case 'ཀ':
          if      (this.rata())                      return t('rata1');
          else if (this.yata())                      return t('kaYata');
          else                                       return t('ka');        case 'ག':
          if      (this.superscribed || this.prefix) {
            if      (this.rata())                    return t('rata3Mod');
            else if (this.yata())                    return t('gaModYata');
            else if (t('gaMod', false) == 'gu') {                  // Exceptions for french & spanish
              if      (this.getVowel() == 'a')       return 'g';   // 'gage' and not 'guage'
              else if (this.getVowel() == 'o')       return 'g';   // 'gong' and not 'guong'
              else if (this.getVowel() == 'u')       return 'g';   // 'guru' and not 'guuru'
              else if (this.getVowel() == 'ou')      return 'g';   // 'gourou' and not 'guourou'
            }
            return t('gaMod');
          }
          else if (this.rata())                      return t('rata3');
          else if (this.yata())                      return t('gaYata');
          else                                       return t('ga');        case 'ཁ':
          if      (this.rata())                      return t("rata2");
          else if (this.yata())                      return t('khaYata');
          else                                       return t('kha');        case 'ང':                                    return t('nga');        case 'ཅ':                                    return t('ca');        case 'ཆ':                                    return t('cha');        case 'ཇ':
          if      (this.superscribed || this.prefix) return t('jaMod');
          else                                       return t('ja');        case 'ཉ':                                    return t('nya');        case 'ཏ':
        case 'ཊ':
          if      (this.rata())                      return t('rata1');
          else                                       return t('ta');        case 'ད':
          if      (this.superscribed || this.prefix) {
            if      (this.rata())                    return t('rata3Mod');
            else                                     return t('daMod');
          }
          else if (this.rata())                      return t('rata3');
          else                                       return t('da');        case 'ཌ': // Experimental, default case based on པཎ་ཌི་ for pandita, check if other cases are correct and/or useful
          if      (this.superscribed || this.prefix) {
            if      (this.rata())                    return t('rata3Mod');
            else                                     return t('daMod');
          }
          else if (this.rata())                      return t('rata3');
          else                                       return t('daMod');        case 'ཐ':
          if      (this.rata())                      return t('rata2');
          else                                       return t('tha');        case 'ན':
        case 'ཎ':                                    return t('na');        case 'པ':
          if      (this.rata())                      return t('rata1');
          else if (this.yata())                      return t('paYata');
          else                                       return t('pa');        case 'ཕ':
          if      (this.rata())                      return t('rata2');
          else if (this.yata())                      return t('phaYata');
          else                                       return t('pha');        case 'བ':
          if      (this.superscribed || this.prefix) {
            if      (this.rata())                    return t('rata3Mod');
            else if (this.yata())                    return t('baModYata');
            else                                     return t('baMod');
          }
          else if (this.rata())                      return t('rata3');
          else if (this.yata())                      return t('baYata');
          else                                       return t('ba');        case 'མ':
          if     (this.yata())                       return t('nya');
          else                                       return t('ma');        case 'ཙ':                                    return t('tsa');        case 'ཚ':                                    return t('tsha');        case 'ཛ':                                    return t('dza');        case 'ཝ':                                    return t('wa');        case 'ཞ':                                    return t('zha');        case 'ཟ':
          if     (this.superscribed || this.prefix)  return t('zaMod');
          else                                       return t('za');        case 'འ':                                    return  '';        case 'ཡ':                                    return t('ya');        case 'ར':                                    return t('ra');        case 'ལ':                                    return t('la');        case 'ཤ':
        case 'ཥ':                                    return t('sha');        case 'ས':                                    return t('sa');        case 'ཧ':
          if      (this.superscribed == 'ལ')         return t('lha');
          if      (this.rata())                      return t('hra');
          else                                       return t('ha');        case 'ཨ':                                    return '';      }
    },
    getVowel: function() {
      switch(this.vowel) {
        case 'ི': return t('i');        case 'ེ':
        case 'ཻ':
          if      (this.suffix && this.suffix.match(/[མནཎར]/)) return t('drengbuMaNaRa');
          else if (this.suffix && this.suffix.match(/[གབལང]/)) return t('drengbuGaBaLaNga');
          else                                                return t('drengbu');        case 'ུ':
          if (this.aKikuIOrSuffixIsLaSaDaNa()) return t('ü');
          else                                 return t('u');        case 'ོ':
        case 'ཽ':
          if (this.aKikuIOrSuffixIsLaSaDaNa()) return t('ö');
          else                                 return t('o');        default:
          if      (this.aKikuI())                           return t('aKikuI');
          else if (this.suffix && this.suffix.match(/[སད]/)) return t('drengbu');
          else if (this.suffix && this.suffix.match(/[ནཎ]/)) return t('aNa');
          else if (this.suffix && this.suffix == 'ལ')        return t('aLa');
          else                                               return t('a');      }
    },
    getSuffix: function() {
      if (this.anusvara)
        if (this.root.match(/[ཧ]/))
          return t('ngaSuffix');
        else
          return t('maSuffix');
      switch(this.suffix) {
        case 'ག': return t('kaSuffix');        case 'ང': return t('ngaSuffix');        case 'ན': return t('naSuffix');        case 'ཎ': return t('naSuffix');        case 'བ': return (this.daoWa()) ? '' : t('baSuffix');        case 'མ': return t('maSuffix');        case 'ར': return t('raSuffix');        case 'ལ': return t('laSuffix');        case 'འང': return t('endLinkChar') + t('a') + t('ngaSuffix');        case 'འམ': return t('endLinkChar') + t('a') + t('maSuffix');        default: return '';
      }
    },
    suffixIsSaDa: function() {
      return this.aKikuI() || (this.suffix && this.suffix.match(/[སད]/));
    },
    aKikuIOrSuffixIsLaSaDaNa: function() {
      return this.aKikuI() || (this.suffix && this.suffix.match(/[ལསདནཎ]/));
    },
    daoWa: function() {
      return this.syllable.match(/^དབ[ྱ]?[ིེོུ]?[ངསགརལདའབནམ]?[ིས]?$/);
    },
    aKikuI: function() {
      return this.syllable.match(/འི$/);
    },
    endingO: function() {
      return this.ifMatchesAppendEndingChar(/འོ$/, t('o', false));
    },
    endingU: function() {
      return this.ifMatchesAppendEndingChar(/འུ$/, t('u', false));
    },
    ifMatchesAppendEndingChar: function(regex, char) {
      return (this.syllable.length > 2 && this.syllable.match(regex)) ? t('endLinkChar') + char : '';
    },
    rata: function() {
      return this.subscribed == 'ྲ';
    },
    yata: function() {
      return this.subscribed == 'ྱ';
    },
    lata: function() {
      return this.subscribed == 'ླ';
    }
  });
};

const assignValidSettingOrThrowException = function (setting) {
  if (typeof(setting) == 'object') {
    if (
      typeof(setting.rules) == 'object' &&
      typeof(setting.exceptions) == 'object'
    ) {
      _(setting.rules).defaults(baseRules);
      return setting;
    } else
      throwBadArgumentsError("You passed an object but it doesn't return " +
        "objects for 'rules' and 'exceptions'.");
  }
  else if (typeof(setting) == 'string') {
    var existingSetting = Settings.find(setting);
    if (existingSetting)
      return existingSetting;
    else
      throwBadArgumentsError("There is no existing setting matching id '" + setting + "'");
  } else if (setting)
    throwBadArgumentsError("You passed " + typeof(setting));
  else
    return Settings.default();
};

const throwBadArgumentsError = function(passedMessage) {
  throw new TypeError(
    "Invalid value for 'setting' option\n+" +
    "------------------------------------\n" +
    passedMessage + "\n" +
    "------------------------------------\n" +
    "The 'setting' option accepts either:\n" +
    "- the name of a existing setting\n" +
    "- a setting object itself\n" +
    "- any object that quacks like a setting, meaning it returns objects " +
    "for 'rules' and 'exceptions'\n"
  )
};

export { Exceptions, Settings, TibetanToPhonetics, baseRules, defaultGeneralExceptions, defaultSettings$1 as defaultSettings, removeMuteCharsAndNormalize, syllablesWithUnknownConsonant };
