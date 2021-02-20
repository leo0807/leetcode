"use strict";

function solve(str) {
  // write code here
  var length = str.length;
  var len = Math.floor(length / 2);
  var tail, head;
  str = str.split(''); // console.log(str)

  for (var i = 0; i < len; i++) {
    var _ref = [str[length - i - 1], str[i]];
    str[i] = _ref[0];
    str[length - i - 1] = _ref[1];
  }

  return str.join('');
}

console.log(solve("123456789"));