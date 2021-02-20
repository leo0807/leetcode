"use strict";

function minPathSum(matrix) {
  // write code here
  var m = matrix.length;
  var n = matrix[0].length;
  var dp = new Array(m);

  for (var i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1).fill(Infinity);
  }

  dp[0][1] = dp[1][0] = 0;

  for (var _i = 0; _i < m; _i++) {
    for (var j = 0; j < n; j++) {
      // console.log(matrix[i + 1][j]);
      dp[_i + 1][j + 1] = Math.min(dp[_i + 1][j], dp[_i][j + 1]) + matrix[_i][j];
    }
  }

  console.log(dp);
  return dp[m][n];
}

var m = [[1, 3, 5, 9], [8, 1, 3, 4], [5, 0, 6, 1], [8, 8, 4, 0]];
console.log(minPathSum(m));