"use strict";

function count(str) {
  var counter = {};
  var len = str.length;

  for (var i = 0; i < len; i++) {
    var _char = str.charAt(i);

    counter[_char] = counter[_char] || 0;
    counter[_char]++;
  }

  var maxChar,
      maxCount = 0;

  for (var _i in counter) {
    if (counter[_i] > maxCount) {
      maxChar = _i;
      maxCount = counter[_i];
    }
  }

  return [maxChar, maxCount];
}

var str = "can you know!";
console.log(count(str));