const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let newMatrix = [];
  let result = 0;

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (!newMatrix[x]) {
        newMatrix[x] = [];
      }
      newMatrix[x].push(matrix[y][x]);
    }
  }

  for (let y = 0; y < newMatrix.length; y++) {
    for (let x = 0; x < newMatrix[y].length; x++) {
      if (newMatrix[y][x] === 0) {
        break;
      }

      result += newMatrix[y][x];
    }
  }

  return result;
}

module.exports = {
  getMatrixElementsSum
};
