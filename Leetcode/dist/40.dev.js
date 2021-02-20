"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var combinationSum2 = function combinationSum2(candidates, target) {
  var res = []; // prev = ;

  candidates.sort(function (a, b) {
    return a - b;
  });
  dfs(res, [], candidates, target, 0);
  return res;
};

function dfs(results, temp, candidates, target, level) {
  if (target === 0) {
    results.push(_toConsumableArray(temp));
    return;
  }

  for (var i = level; i < candidates.length && target - candidates[i] >= 0; i++) {
    //         确保同一层级 不重复
    if (i > level && candidates[i] === candidates[i - 1]) continue;
    temp.push(candidates[i]);
    dfs(results, temp, candidates, target - candidates[i], i + 1);
    temp.pop();
  }
}