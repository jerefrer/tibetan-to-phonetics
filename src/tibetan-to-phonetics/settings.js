

import { baseRules } from './settings/base.js';
import { defaultSettings as rawDefaultSettings } from './settings/all.js';
import { deepClone } from './utils.js';

const defaultSettingId = 'english-loose';

const defaultsMissingRulesToBaseRules = function(setting) {
  setting.isDefault = true;
  setting.rules = Object.assign({}, baseRules, setting.rules);
  return setting;
}

const defaultSettings =
  rawDefaultSettings.map((setting) => defaultsMissingRulesToBaseRules(setting));

export const Settings = {
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
    return this.settings.find(s => s.id === settingId);
  },
  findOriginal: function(settingId, options = {}) {
    var setting = defaultSettings.find(s => s.id === settingId);
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
      rules: Object.assign({}, baseRules, (fromSetting && deepClone(fromSetting.rules)) || {}),
      exceptions: fromSetting && deepClone(fromSetting.exceptions) || {}
    })
    this.updateStore();
  },
  copy(setting) {
    this.create(setting, 'Copy of ' + setting.name);
  },
  import(setting) {
    this.create(setting, setting.name);
  },
  delete(setting) {
    this.settings = this.settings.filter(s => s !== setting);
    this.updateStore();
    Storage.get('selectedSettingId', undefined, (value) => {
      if (value == setting.id)
        Storage.set('selectedSettingId', defaultSettingId);
    })
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
        .filter((setting) => typeof setting.id === 'number' && !isNaN(setting.id))
        .reduce((max, s) => s.id > max.id ? s : max, { id: 0 })
    ).id;
  },
  updateStore(callback) {
    Storage.set('settings', this.settings, (value) => {
      if (callback) callback(value);
    });
  },
  numberOfSpecificRules (setting) {
    return Object.keys(setting.rules)
      .filter(key => baseRules[key] != setting.rules[key])
      .length;
  }
}