var { _ } = require('../../underscore/underscore.umd.js');
var { TibetanToPhonetics, Settings, Exceptions } = require('../dist/tibetan-to-phonetics.umd.js');

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Helpers = {}));
}(this, (function (exports) { 'use strict';

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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
