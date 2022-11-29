import TibetanNormalizer from '../../tibetan-normalizer/dist/tibetan-normalizer.esm.js';

export const removeMuteCharsAndNormalize = function (tibetan) {
  var normalized = TibetanNormalizer.normalize(tibetan);
  return normalized
    .replace(/[༵\u0F04-\u0F0A\u0F0D-\u0F1F\u0F3A-\u0F3F\u0FBE-\uF269]/g, '').trim()
    .replace(/[༔ཿ]/g, '་')
    .replace(/[ྃྂ]/g, 'ཾ')
    .replace(/་$/g, '');
}

// Copied from Sugar

String.prototype.first = function(num) {
  if (num == undefined) num = 1;
  return this.substr(0, num);
}

String.prototype.last = function(num) {
  if (num == undefined) num = 1;
  var start = this.length - num < 0 ? 0 : this.length - num;
  return this.substr(start);
}

String.prototype.capitalize = function(all) {
  var lastResponded;
  return this.toLowerCase().replace(all ? /[^']/g : /^\S/, function(lower) {
    var upper = lower.toUpperCase(), result;
    result = lastResponded ? lower : upper;
    lastResponded = upper !== lower;
    return result;
  });
}

String.prototype.to = function(num) {
  if(num == undefined) num = this.length;
  return this.slice(0, num);
}

String.prototype.pad = function(num, padding) {
  var half, front, back;
  num   = checkRepeatRange(num);
  half  = Math.max(0, num - this.length) / 2;
  front = Math.floor(half);
  back  = Math.ceil(half);
  return padString(front, padding) + this + padString(back, padding);
}

function checkRepeatRange(num) {
  num = +num;
  if(num < 0 || num === Infinity) {
    throw new RangeError('Invalid number');
  }
  return num;
}

function padString(num, padding) {
  return repeatString(padding !== undefined ? padding : ' ', num);
}

function repeatString(str, num) {
  var result = '', str = str.toString();
  while (num > 0) {
    if (num & 1) {
      result += str;
    }
    if (num >>= 1) {
      str += str;
    }
  }
  return result;
}
