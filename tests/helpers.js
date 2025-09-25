import { Settings, TibetanToPhonetics } from '../src/tibetan-to-phonetics/tibetan-to-phonetics';

const runTestGroup = function (testGroup) {
  describe(testGroup.name, function () {
    testGroup.tests.forEach(function (test) {
      var func = testGroup.pending || test.pending ? it.skip : it;
      func(test.tibetan, function () {
        var setting = testGroup.setting
          ? Settings.findOriginal(testGroup.setting)
          : Settings.findOriginal('english-semi-strict');
        setting = JSON.parse(JSON.stringify(setting));
        if (testGroup.rules) Object.assign(setting.rules, testGroup.rules);
        if (testGroup.exceptions) Object.assign(setting.exceptions, testGroup.exceptions);
        var converted = new TibetanToPhonetics({
          setting: setting,
          capitalize: testGroup.capitalize
        }).convert(test.tibetan);
        expect(converted).toEqual(test.converted);
      });
    });
  });
};

exports.runTestGroup = runTestGroup;
