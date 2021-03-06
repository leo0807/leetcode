"use strict";

function isPalindrome(x) {
  // write code here
  if (x < 0) return false;
  x = x.toString();
  var length = x.length;
  var half = Math.floor(length / 2);

  for (var i = 0; i < half; i++) {
    if (x.charAt(i) !== x.charAt(length - i - 1)) return false;
  }

  return true;
}