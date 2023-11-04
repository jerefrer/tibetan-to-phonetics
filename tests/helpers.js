import _ from 'underscore';
import { TibetanToPhonetics, Settings, Exceptions } from '../lib/esm/tibetan-to-phonetics/tibetan-to-phonetics';

const runTestGroup = function(testGroup) {
  describe(testGroup.name, function() {
    _(testGroup.tests).each(function(test) {
      var func = (testGroup.pending || test.pending) ? it.skip : it;
      func(test.tibetan, function() {
        var setting =
          testGroup.setting
          ? Settings.findOriginal(testGroup.setting)
          : Settings.originalDefault();
        setting = JSON.parse(JSON.stringify(setting));
        if (testGroup.rules)
          _(setting.rules).extend(testGroup.rules);
        if (testGroup.exceptions)
          _(setting.exceptions).extend(testGroup.exceptions);
        var converted = new TibetanToPhonetics(
          {
            setting: setting,
            capitalize: testGroup.capitalize
          }
        ).convert(test.tibetan);
        expect(converted).toEqual(test.converted);
      })
    })
  })
}

exports.runTestGroup = runTestGroup;
