"use strict";

function jumpFloor(number) {
  // write code here
  var dp = [];
  dp[0] = dp[1] = 1;

  for (var i = 2; i <= number; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[number];
}

function jumpFloor2(number) {
  // write code here
  if (number === 0 || number === 1) return number;
  var a = 1,
      b = 1,
      c;

  for (var i = 2; i <= number; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}