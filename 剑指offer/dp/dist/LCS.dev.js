"use strict";

function LCS(s1, s2) {
  // write code here
  var length1 = s1.length;
  var length2 = s2.length;
  var dp = new Array(length1 + 1);

  for (var i = 0; i < length1 + 1; i++) {
    dp[i] = new Array(length2 + 1).fill("");
  }

  for (var _i = 0; _i < length1; _i++) {
    for (var j = 0; j < length2; j++) {
      if (s1.charAt(_i) === s2.charAt(j)) {
        // dp[i][j] = dp[i - 1][j - 1] + 1;
        dp[_i + 1][j + 1] = dp[_i][j] + s1[_i];
      } else {
        // dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        if (dp[_i + 1][j].length > dp[_i][j + 1].length) {
          dp[_i + 1][j + 1] = dp[_i + 1][j];
        } else {
          dp[_i + 1][j + 1] = dp[_i][j + 1];
        }
      }
    }
  }

  return dp[length1][length2];
} // let str1 = "1AB2345CD",
//     str2 = "12345EF";


var str1 = "1A2C3D4B56",
    str2 = "B1D23CA45B6A"; // "1A2C3D4B56", "B1D23CA45B6A"

console.log(LCS(str1, str2));