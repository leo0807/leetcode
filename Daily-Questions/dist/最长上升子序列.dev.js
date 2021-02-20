"use strict";

function LIS(arr) {
  // write code here
  var len = arr.length,
      left,
      right,
      dp = new Array(len).fill(1),
      res = [];

  for (var i = 0; i < len - 1; i++) {
    left = 0;
    right = i + 1;

    while (left < right) {
      var tmp = [];

      if (arr[left] < arr[right]) {
        if (dp[left] + 1 > dp[right]) {
          dp[right] = dp[left] + 1;
        }

        tmp.push(arr[left]);
      }

      console.log(tmp);
      ++left;

      if (tmp.length != 0 && tmp.length >= res.length) {
        if (res.length === 0) {
          res = tmp;
        } else if (tmp[0] <= res[0]) {
          res.push(tmp);
        }

        res = tmp;
      }
    }
  }

  console.log(dp);
  return res;
} // const arr = [2, 1, 5, 3, 6, 4, 8, 9, 7];


var arr = [1, 2, 8, 6, 4];
console.log(LIS(arr));