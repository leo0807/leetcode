"use strict";

function longestCommonPrefix(strs) {
  // write code here
  if (strs.length == 0) return '';
  var len1 = strs[0].length,
      len2 = strs.length;
  var res = [];

  for (var i = 0; i < len1; i++) {
    var temp = strs[0].charAt(i);

    for (var j = 0; j < len2; j++) {
      if (strs[j][i] !== temp) {
        return res.join("");
      }
    }

    res.push(temp);
  }

  return res.join("");
}

var strs = ["abca", "abc", "abca", "abc", "abcc"];
console.log(longestCommonPrefix([]));