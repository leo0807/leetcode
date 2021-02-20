"use strict";

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function dailyTemperatures(T) {
  var res = new Array(T.length).fill(0);
  var stack = [];

  for (var i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      var index = stack.pop();
      res[index] = i - index;
    }

    stack.push(i);
  }

  return res;
};