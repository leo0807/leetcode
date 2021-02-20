"use strict";

function maxProduct(arr) {
  // write code here
  var min = arr[0],
      max = arr[0],
      len = arr.length,
      res = arr[0];

  for (var i = 1; i < len; i++) {
    var _min = min;
    min = Math.min(Math.min(arr[i], arr[i] * min), arr[i] * max);
    max = Math.max(Math.max(arr[i], arr[i] * max), arr[i] * _min);
    res = Math.max(res, max);
  }

  return res;
}