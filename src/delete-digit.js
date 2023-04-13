const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nStr = n.toString();
  let nums = [];

  for (let i = 0; i < nStr.length; i++) {
    nums.push(+(nStr.slice(0, i) + nStr.slice(i + 1)))
  }

  return Math.max(...nums);
}

module.exports = {
  deleteDigit
};
