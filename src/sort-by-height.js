const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let values = [];
  let counter = 0;
  let result = [];

  arr.forEach(el => {
    if (el !== -1) {
      values.push(el);
    }
  });

  values.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(arr[i]);
      counter++;
    } else {
      result.push(values[i - counter]);
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};
