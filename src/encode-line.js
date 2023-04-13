const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let symbol;
  let counter = 1;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      symbol = str[i];
      counter++;
    } else {
      symbol = str[i];
      result += [counter, symbol].filter(el => el !== 1).join('');
      counter = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
