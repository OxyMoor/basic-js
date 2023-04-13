const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let moreStrArr = s1.length > s2.length ? s1.split('') : s2.split('');
  let lessStrArr = s1.length > s2.length ? s2.split('') : s1.split('');

  let counter = 0;

  lessStrArr.forEach(el => {
    if (moreStrArr.includes(el)) {
      counter++;
      moreStrArr.splice(moreStrArr.indexOf(el), 1);
    }
  });

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
