import { Settings, TibetanToPhonetics } from '../src/tibetan-to-phonetics/tibetan-to-phonetics';

describe('Choosing a setting at instantiation', function () {
  it('falls back to default Setting when not passing any setting argument', function () {
    var converter = new TibetanToPhonetics();
    var result = converter.convert('གང་གི་བློ་གྲོས་');
    expect(result).toEqual('kangki lotrö');
  });

  it('works when passing as setting a string that matches the id of an existing Setting', function () {
    var converter = new TibetanToPhonetics({ setting: 'english-loose' });
    var result = converter.convert('དབྱིངས་ཀྱི་ཞིང་ཁམས་སུ');
    expect(result).toEqual('yingkyi shingkam su');
  });

  it('raises an error when passing as setting a string that does not match any Setting id', function () {
    expect(() => {
      new TibetanToPhonetics({ setting: 'japanese' });
    }).toThrowError(/no existing setting matching id 'japanese'/);
  });

  it('works when passing as setting an existing Setting object', function () {
    var frenchSetting = Settings.find('french');
    var converter = new TibetanToPhonetics({ setting: frenchSetting });
    var result = converter.convert('གང་གི་བློ་གྲོས་');
    expect(result).toEqual('kangki lotreu');
  });

  it('works when passing as setting an object defining both rules and exceptions', function () {
    var fakeRuleSet = {
      rules: { ö: 'eu' },
      exceptions: {}
    };
    var converter = new TibetanToPhonetics({ setting: fakeRuleSet });
    var result = converter.convert('གང་གི་བློ་གྲོས་');
    expect(result).toEqual('kangki lotreu');
  });

  it('raises an error when passing as setting an invalid object', function () {
    expect(() => {
      var fakeRuleSet = {};
      new TibetanToPhonetics({ setting: fakeRuleSet });
    }).toThrowError(/You passed an object but it doesn't return objects for 'rules' and 'exceptions'/);
  });
});
