"use strict";

var minDistance = function minDistance(str1, str2) {
  var len1 = str1.length,
      len2 = str2.length,
      dp = new Array(len1 + 1);

  for (var i = 0; i < len1 + 1; i++) {
    dp[i] = new Array(len2 + 1).fill(0);
  }

  console.log(dp);

  for (var j = 0; j <= len2; j++) {
    console.log(dp[j][0]);
    dp[j][0] = 1;
  }

  ;

  for (var _i = 0; _i <= len1; _i++) {
    dp[0][_i] = 1;
  }

  dp[0][0] = 0;

  for (var _i2 = 1; _i2 <= len1; _i2++) {
    for (var _j = 1; _j <= len2; _j++) {
      if (str1[_i2 - 1] === str2[_j - 1]) {
        dp[_i2][_j] = dp[_i2 - 1][_j - 1];
      } else {
        dp[_i2][_j] = Math.min(dp[_i2 - 1][_j] + 1, dp[_i2][_j - 1] + 1, dp[_i2 - 1][_j - 1] + 1);
      }
    }
  }

  return dp[len1][len2];
};

console.log(minDistance("", "a"));