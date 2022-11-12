export var defaultSettings = [];

import { englishLoose } from '../settings/english-loose.js';
import { englishSemiStrict } from '../settings/english-semi-strict.js';
import { englishStrict } from '../settings/english-strict.js';
import { french } from '../settings/french.js';
import { spanish } from '../settings/spanish.js';
import { englishSuperLoose } from '../settings/english-super-loose.js';

defaultSettings.push(englishLoose);
defaultSettings.push(englishSemiStrict);
defaultSettings.push(englishStrict);
defaultSettings.push(french);
defaultSettings.push(spanish);
defaultSettings.push(englishSuperLoose);