"use strict";

function solve(a) {
  // write code here
  var res = 0;

  for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] != i) return i;
  }
}

function solve1(a) {
  // write code here
  var left = 0,
      right = a.length;

  while (left < right) {
    var mid = Math.floor((left + right) / 2);

    if (a[mid] == mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}