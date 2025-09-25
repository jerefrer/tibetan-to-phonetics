

import { Settings } from './settings.js';
import { baseRules } from './settings/base.js';
import { Exceptions } from './exceptions.js';
import { removeMuteCharsAndNormalize } from './utils.js';
import { TibetanSyllableParser } from 'tibetan-syllable-parser';

export var syllablesWithUnknownConsonant = [];
export { Settings } from './settings.js';
export { baseRules } from './settings/base.js';
export { defaultSettings } from './settings/all.js';
export { defaultGeneralExceptions } from './settings/exceptions.js';
export { Exceptions } from './exceptions.js';
export { removeMuteCharsAndNormalize } from './utils.js';

var t, findException;

export const TibetanToPhonetics = function(options = {}) {
  var setting = assignValidSettingOrThrowException(options.setting);
  var rulesUsed = {};
  var exceptionsUsed = {};
  t = (key, track = true) => {
    var value = setting.rules[key];
    if (track)
      rulesUsed[key] = value;
    return value;
  }
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
      return text.split(/(\d+)| /).filter(Boolean);
    },
    substituteNumbers (text) {
      const tibToArab = {
        '\u0f20': '0', '\u0f21': '1', '\u0f22': '2', '\u0f23': '3', '\u0f24': '4',
        '\u0f25': '5', '\u0f26': '6', '\u0f27': '7', '\u0f28': '8', '\u0f29': '9'
      };
      Object.entries(tibToArab).forEach(([tibetan, arabic]) => {
        text = text.replace(new RegExp(tibetan, 'g'), arabic);
      });
      return text;
    },
    substituteWordsWith7AsCheGo (text) {
      return text.
        replace(/༧ཞབས/g, 'ཞབས').
        replace(/༧སྐྱབས/g, 'སྐྱབས');
    }
  }
  var exceptions = new Exceptions(setting, converter, rulesUsed, exceptionsUsed);
  findException = (text) => exceptions.find(text);
  return converter;
}

var Group = function(tibetan, rulesUsed) {
  return {
    tibetan: tibetan,
    group: '',
    convert: function() {
      var syllable;
      this.syllables = tibetan.trim().split('\u0f0b').filter(Boolean);
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
}

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
          else                                       return t('ka'); break;
        case 'ག':
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
          else                                       return t('ga'); break;
        case 'ཁ':
          if      (this.rata())                      return t("rata2");
          else if (this.yata())                      return t('khaYata');
          else                                       return t('kha'); break;
        case 'ང':                                    return t('nga'); break;
        case 'ཅ':                                    return t('ca'); break;
        case 'ཆ':                                    return t('cha'); break;
        case 'ཇ':
          if      (this.superscribed || this.prefix) return t('jaMod');
          else                                       return t('ja'); break;
        case 'ཉ':                                    return t('nya'); break;
        case 'ཏ':
        case 'ཊ':
          if      (this.rata())                      return t('rata1');
          else                                       return t('ta'); break;
        case 'ད':
          if      (this.superscribed || this.prefix) {
            if      (this.rata())                    return t('rata3Mod');
            else                                     return t('daMod');
          }
          else if (this.rata())                      return t('rata3');
          else                                       return t('da'); break;
        case 'ཌ': // Experimental, default case based on པཎ་ཌི་ for pandita, check if other cases are correct and/or useful
          if      (this.superscribed || this.prefix) {
            if      (this.rata())                    return t('rata3Mod');
            else                                     return t('daMod');
          }
          else if (this.rata())                      return t('rata3');
          else                                       return t('daMod'); break;
        case 'ཐ':
          if      (this.rata())                      return t('rata2');
          else                                       return t('tha'); break;
        case 'ན':
        case 'ཎ':                                    return t('na'); break;
        case 'པ':
          if      (this.rata())                      return t('rata1');
          else if (this.yata())                      return t('paYata');
          else                                       return t('pa'); break;
        case 'ཕ':
          if      (this.rata())                      return t('rata2');
          else if (this.yata())                      return t('phaYata');
          else                                       return t('pha'); break;
        case 'བ':
          if      (this.superscribed || this.prefix) {
            if      (this.rata())                    return t('rata3Mod');
            else if (this.yata())                    return t('baModYata');
            else                                     return t('baMod');
          }
          else if (this.rata())                      return t('rata3');
          else if (this.yata())                      return t('baYata');
          else                                       return t('ba'); break;
        case 'མ':
          if     (this.yata())                       return t('nya');
          else                                       return t('ma'); break;
        case 'ཙ':                                    return t('tsa'); break;
        case 'ཚ':                                    return t('tsha'); break;
        case 'ཛ':                                    return t('dza'); break;
        case 'ཝ':                                    return t('wa'); break;
        case 'ཞ':                                    return t('zha'); break;
        case 'ཟ':
          if     (this.superscribed || this.prefix)  return t('zaMod');
          else                                       return t('za'); break;
        case 'འ':                                    return  ''; break;
        case 'ཡ':                                    return t('ya'); break;
        case 'ར':                                    return t('ra'); break;
        case 'ལ':                                    return t('la'); break;
        case 'ཤ':
        case 'ཥ':                                    return t('sha'); break;
        case 'ས':                                    return t('sa'); break;
        case 'ཧ':
          if      (this.superscribed == 'ལ')         return t('lha');
          if      (this.rata())                      return t('hra');
          else                                       return t('ha'); break;
        case 'ཨ':                                    return ''; break;
      }
    },
    getVowel: function() {
      switch(this.vowel) {
        case 'ི': return t('i'); break;
        case 'ེ':
        case 'ཻ':
          if      (this.suffix && this.suffix.match(/[མནཎར]/)) return t('drengbuMaNaRa');
          else if (this.suffix && this.suffix.match(/[གབལང]/)) return t('drengbuGaBaLaNga');
          else                                                return t('drengbu'); break;
        case 'ུ':
          if (this.aKikuIOrSuffixIsLaSaDaNa()) return t('ü');
          else                                 return t('u'); break;
        case 'ོ':
        case 'ཽ':
          if (this.aKikuIOrSuffixIsLaSaDaNa()) return t('ö');
          else                                 return t('o'); break;
        default:
          if      (this.aKikuI())                           return t('aKikuI');
          else if (this.suffix && this.suffix.match(/[སད]/)) return t('drengbu');
          else if (this.suffix && this.suffix.match(/[ནཎ]/)) return t('aNa');
          else if (this.suffix && this.suffix == 'ལ')        return t('aLa');
          else                                               return t('a'); break;
      }
    },
    getSuffix: function() {
      if (this.anusvara)
        if (this.root.match(/[ཧ]/))
          return t('ngaSuffix');
        else
          return t('maSuffix');
      switch(this.suffix) {
        case 'ག': return t('kaSuffix'); break;
        case 'ང': return t('ngaSuffix'); break;
        case 'ན': return t('naSuffix'); break;
        case 'ཎ': return t('naSuffix'); break;
        case 'བ': return (this.daoWa()) ? '' : t('baSuffix'); break;
        case 'མ': return t('maSuffix'); break;
        case 'ར': return t('raSuffix'); break;
        case 'ལ': return t('laSuffix'); break;
        case 'འང': return t('endLinkChar') + t('a') + t('ngaSuffix'); break;
        case 'འམ': return t('endLinkChar') + t('a') + t('maSuffix'); break;
        default: return '';
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
}

const assignValidSettingOrThrowException = function (setting) {
  if (typeof(setting) == 'object') {
    if (
      typeof(setting.rules) == 'object' &&
      typeof(setting.exceptions) == 'object'
    ) {
      setting.rules = Object.assign({}, baseRules, setting.rules);
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
}

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
}