"use strict";

function permute(num) {
  // write code here
  var res = [];
  dfs(res, num, 0);
  return res;
}

function dfs(res, num, idx) {
  if (idx === num.length - 1) {
    res.push(num);
    return;
  }

  ;

  for (var i = idx; i < num.length; i++) {
    var _ref = [num[idx], num[i]];
    num[i] = _ref[0];
    num[idx] = _ref[1];
    dfs(res, num, idx + 1);
    var _ref2 = [num[i], num[idx]];
    num[idx] = _ref2[0];
    num[i] = _ref2[1];
  }
}