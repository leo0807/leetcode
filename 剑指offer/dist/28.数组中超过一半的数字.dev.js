"use strict";

function MoreThanHalfNum_Solution(numbers) {
  // write code here
  numbers.sort(function (a, b) {
    return a - b;
  });
  var length = numbers.length;
  var half = Math.floor(length / 2);

  for (var i = 0; i < length; i++) {
    if (numbers[i] === numbers[i + half]) {
      return numbers[i];
    }
  }

  return 0;
}