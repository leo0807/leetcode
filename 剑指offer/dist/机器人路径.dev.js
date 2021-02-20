"use strict";

function uniquePaths(m, n) {
  // write code here
  var arr = new Array(m + 1);

  for (var i = 0; i < m + 1; i++) {
    arr[i] = new Array(n + 1).fill(0);
  }

  arr[0][1] = 1;

  for (var _i = 1; _i < m + 1; _i++) {
    for (var j = 1; j < n + 1; j++) {
      arr[_i][j] = arr[_i - 1][j] + arr[_i][j - 1];
    }
  }

  return arr[m][n];
}

console.log(uniquePaths(2, 2));