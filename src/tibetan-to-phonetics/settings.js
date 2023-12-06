import _ from 'underscore';

import { baseRules } from './settings/base.js';
import { defaultSettings as rawDefaultSettings } from './settings/all.js';
import { deepClone } from './utils.js';

const defaultSettingId = 'english-loose';

const defaultsMissingRulesToBaseRules = function(setting) {
  setting.isDefault = true;
  _(setting.rules).defaults(baseRules);
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
    this.settings = _(this.settings).without(setting);
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
}