var { TibetanTransliterator, Settings, Exceptions } = require('../dist/tibetan-transliterator.umd.js');
Settings.initializeFromDefaults();
Exceptions.initializeFromDefaults();

describe('Choosing a setting at instantiation', function() {

  it('falls back to default Setting when not passing any setting argument', function() {
    var transliterator = new TibetanTransliterator();
    var result = transliterator.transliterate('གང་གི་བློ་གྲོས་');
    expect(result).toEqual('kangki lotrö');
  })

  it('works when passing as setting a string that matches the id of an existing Setting', function() {
    var transliterator = new TibetanTransliterator({ setting: 'english-loose' });
    var result = transliterator.transliterate('གང་གི་བློ་གྲོས་');
    expect(result).toEqual('gang-gi lodrö');
  })

  it('raises an error when passing as setting a string that does not match any Setting id', function() {
    expect(() => {
      new TibetanTransliterator({ setting: 'japanese' });
    }).toThrowError(/no existing setting matching id 'japanese'/)
  })

  it('works when passing as setting an existing Setting object', function() {
    var frenchSetting = Settings.find('french');
    var transliterator = new TibetanTransliterator({ setting: frenchSetting });
    var result = transliterator.transliterate('གང་གི་བློ་གྲོས་');
    expect(result).toEqual('kangki lotreu');
  })

  it('works when passing as setting an object defining both rules and exceptions', function() {
    var fakeRuleSet = {
      rules: { 'ö': 'eu' },
      exceptions: {}
    };
    var transliterator = new TibetanTransliterator({ setting: fakeRuleSet });
    var result = transliterator.transliterate('གང་གི་བློ་གྲོས་');
    expect(result).toEqual('kangki lotreu');
  })

  it('raises an error when passing as setting an invalid object', function() {
    expect(() => {
      var fakeRuleSet = {};
      new TibetanTransliterator({ setting: fakeRuleSet });
    }).toThrowError(/You passed an object but it doesn't return objects for 'rules' and 'exceptions'/)
  })

})