"use strict";

// 给定一个矩阵，矩阵内所有数均为非负整数。
// 求一条路径，该路径上所有数是递增的。
// 这个路径必须满足以下条件：
// 1、对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外。
// 2、你不能走重复的单元格。即每个格子最多只能走一次。
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// 返回值 5
// 1 -> 2 -> 3 -> 6 -> 9即可。当然这种递增路径不是唯一的。 
function solve(matrix) {
  // write code here
  var row = matrix.length,
      col = matrix[0].length,
      res = 1;
  var dp = new Array(row);
  var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  for (var i = 0; i < row; i++) {
    dp[i] = new Array(col).fill(0);
  }

  for (var _i = 0; _i < row; _i++) {
    for (var j = 0; j < col; j++) {
      if (dp[_i][j] === 0) {
        res = Math.max(getLength(_i, j), res);
      }

      ;
    }
  }

  function getLength(m, n) {
    if (dp[m][n]) return dp[m][n];
    dp[m][n] = 1;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = directions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var x = _step.value;

        var _i2 = m + x[0],
            _j = n + x[1];

        if (_i2 >= 0 && _i2 < row && _j >= 0 && _j < col && matrix[_i2][_j] > matrix[m][n]) {
          dp[m][n] = Math.max(dp[m][n], 1 + getLength(_i2, _j));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return dp[m][n];
  }

  return res;
}