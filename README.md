# tibetan-to-phonetics

A naive attempt at automatically converting Tibetan Unicode texts into
reliable phonetics based on customizable sets of rules.

Works almost perfectly for prayers which syllables are chanted two by two.

Usage
-----------

```js
import { TibetanToPhonetics } from 'tibetan-to-phonetics';

var phonetics = new TibetanToPhonetics(); // using default 'english-strict'
phonetics.convert('གང་གི་བློ་གྲོས་');
// => 'kangki lotrö'
phonetics.convert('སྒྲིབ་གཉིས་སྤྲིན་བྲལ་');
// => 'dripnyi trintrel'
```
Use the `capitalize` option to capitalize the first letter of every group,
either passing it to the constructor:
```js
var phonetics = new TibetanToPhonetics({ capitalize: true });
phonetics.convert('ཨེ་མ་ཧོཿ སྤྲོས་བྲལ་ཆོས་ཀྱི་དབྱིངས་ཀྱི་ཞིང་ཁམས་སུ༔ ');
// => 'Émaho Trötrel chökyi yingkyi zhingkham su'
phonetics.convert('གང་གི་བློ་གྲོས་');
// => 'Kangki lotrö'
```
Or on a per-call basis:
```js
var phonetics = new TibetanToPhonetics();
phonetics.convert('ཨེ་མ་ཧོཿ སྤྲོས་བྲལ་ཆོས་ཀྱི་དབྱིངས་ཀྱི་ཞིང་ཁམས་སུ༔ ', { capitalize: true });
// => 'Émaho Trötrel chökyi yingkyi zhingkham su'
phonetics.convert('ཨེ་མ་ཧོཿ སྤྲོས་བྲལ་ཆོས་ཀྱི་དབྱིངས་ཀྱི་ཞིང་ཁམས་སུ༔ ');
// => 'émaho trötrel chökyi yingkyi zhingkham su'
```
Use different settings, either by passing the name of an existing setting:
```js
new TibetanToPhonetics({ setting: 'english-loose' }).convert('གང་གི་བློ་གྲོས་');
// => 'gangi lodrö'

```
Or the setting itself:
```js
import { TibetanToPhonetics, Settings } from 'tibetan-to-phonetics';

var frenchRuletset = Settings.find('french');
new TibetanToPhonetics({ setting: frenchRuletset }).convert('གང་གི་བློ་གྲོས་');
// => 'kangki lotreu'
```
Or any object that quacks like a setting, meaning it returns objects for `rules` and `exceptions`:
```js
var dummyRuleSet = {
  rules: { 'ö': 'eu' },
  exceptions: {}
};
new TibetanToPhonetics({ setting: dummyRuleSet }).convert('གང་གི་བློ་གྲོས་');
// => 'kangki lotreu'
```

Lists of the rules and exceptions that have been used by an instance of phonetics
since its creation are available as `rulesUsed` and `exceptionsUsed`.
```js
var phonetics = new TibetanToPhonetics(); // using default 'english-strict'
phonetics.convert('གང་གི་བློ་གྲོས་');
// => 'kangki lotrö'
phonetics.rulesUsed
// => {
//   "ga": "k",
//   "a": "a",
//   "ngaSuffix": "ng",
//   "i": "i",
//   "lata": "l",
//   "o": "o",
//   "rata3": "tr",
//   "ö": "ö"
// }}
```
They can be reset by calling `resetRulesUsed()` and `resetExceptionsUsed()`.
```js
phonetics.resetRulesUsed();
phonetics.rulesUsed
// => {}
```

Settings
-----------

### Editing and creating default settings

The default settings are defined in `settings/`, feel free to modify them to
your needs, but `base.js` and `english-strict.js` are not meant to be edited
since they form the basis upon which all other sets are built.

Rules are defined as key-value pairs, the left-hand side being the internal
code used by the app, the right-hand side what you want it to be substituted
with in the generated conversion.

For instance the rule for "kha" (2nd column "ka") in `base.js` is:
```js
'kha': 'kh',
```

If you wish to display "kha" as "ka", you would have this line in any of the
other setting files:
```js
'kha': 'k',
```
Which will take precedence over the default value (that will be ignored).

Every single line in `base.js` can thus be copy-pasted in another set file
to be overridden. You can edit existing rule sets or create new ones.

To add a new rule set just copy an existing one and replace the `id` and
`name`, making sure your new `id` has not already been taken.
```html
# settings/my-new-setting.js

defaultSettings.push({

  id: 'my-new-setting',
  name: 'My new setting',

  rules: {
    ...
  },

  exceptions: {
    ...
  }

})
```

Also don't forget to add the require lines to the  `settings/all.js`.

Exceptions
-----------

Default exceptions apply to all settings. Basically the left-hand
side value will be substituted by the right-hand side value, and every Tibetan
part in the right-hand side value will be itself converted.

### Editing default exceptions

General exceptions apply to all different settings and are found in
`settings/exceptions.js`

Setting-specific exceptions can also be defined. Just add the specific
exceptions in the `exceptions` attribute of any setting. If the left-hand side
value is the same as one of the general exceptions, it will take precedence
over the general exception.

Fonts
-----------

The app is designed to use these fonts in order of preference:
```
* TibetanChogyalUnicode-170221 if it is installed on the user system
* TibetanChogyalUnicode-ID     if it is installed on the user system
* TibetanChogyalUnicode        if it is installed on the user system
* TibetanMachineUnicode        if none of the previous ones are installed. It is included in the app.
```

Since I believe `TibetanChogyalUnicode` is copyrighted but `TibetanMachineUnicode` is free to use, this should ensure that people with `TibetanChogyalUnicode` already installed on their machine will be able to benefit from it, and those who don’t will still have a good enough font displayed even if none are installed on their system.
You could update all the .css files in stylesheets/ with the latest version of `TibetanChogyalUnicode` if necessary, either by replacing `TibetanChogyalUnicode-170221` by the latest one:
```
font-family: TibetanChogyalUnicode-210803, TibetanChogyalUnicode-ID, TibetanChogyalUnicode, TibetanMachineUnicode !important;
```
instead of:
```
font-family: TibetanChogyalUnicode-170221, TibetanChogyalUnicode-ID, TibetanChogyalUnicode, TibetanMachineUnicode !important;
```
or by adding the latest one before `TibetanChogyalUnicode-170221` with a comma in between:
```
font-family: TibetanChogyalUnicode-210803, TibetanChogyalUnicode-170221, TibetanChogyalUnicode-ID, TibetanChogyalUnicode, TibetanMachineUnicode !important;
```

Development
-----------

`npm run serve`.

Also you will have an extra option on the `/settings/exceptions` page allowing
you to ignore browser stored values for the general exceptions, therefore making
it easier to test the ones you are adding to the `settings/exceptions.js` file.

Testing
-----------

`npm run test`.

Contributing
------------

You are most welcome to pitch in and improve anything that doesn't feel right,
define new default settings or add more edge cases.

If it looks a bit messy to you, still don't be discouraged to give it a try,
you can always run the tests to make sure all the currently covered cases
continue to yield the expected results.

And if you do tweak the code, please add enough tests so that others after you
can rely on them too!

Credits
-----------

The rules used to deconstruct the syllables into parts (root, prefix, ...)
are almost entirely based on John Rockwell's *A Primer for Classical Literary
Tibetan, Volume 1*.

Much thanks to everyone involved in the publication of
this great book.

A zillion thanks also to:

* Joe B. Wilson and everybody involved in publishing *Translating Tibetan from
  Buddhism* which is equally great and provided some more clarifications.
* Tony Duff and friends for producing all these beautiful Tibetan fonts,
  software and fine translations.
* Everybody involved in building and maintaining Vue.js, SemanticUI, FontAwesome,
  SublimeText, jQuery, Sugar.js, Underscore.js, DevDocs, Zeal, Google Chrome
  and Mozilla Firefox for making web development so easy and enjoyable, even in
  an offline environment.

Through the virtue coming from this work, may all beings human and
otherwise reach absolute freedom and peace.
