"use strict";

function solve(A) {
  // write code here
  var len = A.length;
  A.sort(function (a, b) {
    return a - b;
  });
  var A1 = A[0] * A[1] * A[len - 1];
  var A2 = A[len - 1] * A[len - 2] * A[len - 3];
  return Math.max(A1, A2);
}