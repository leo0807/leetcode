"use strict";

function LCS(str1, str2) {
  // write code here
  var length1 = str1.length;
  var length2 = str2.length;
  var dp = new Array(length1 + 1);

  for (var i = 0; i <= length1; i++) {
    dp[i] = new Array(length2 + 1).fill(0);
  }

  var index = 0,
      max = 0;

  for (var _i = 0; _i < length1; _i++) {
    for (var j = 0; j < length2; j++) {
      if (str1.charAt(_i) === str2.charAt(j)) {
        dp[_i + 1][j + 1] = dp[_i][j] + 1;

        if (max < dp[_i + 1][j + 1]) {
          max = dp[_i + 1][j + 1];
          index = _i + 1;
        }
      }
    }
  }

  console.log(dp[length1][length2]);
  return str1.substring(index - max, index);
} // let str1 = "1AB2345CD",
//     str2 = "12345EF";


var str1 = "1A2C3D4B56",
    str2 = "B1D23CA45B6A"; // "1A2C3D4B56", "B1D23CA45B6A"

console.log(LCS(str1, str2));