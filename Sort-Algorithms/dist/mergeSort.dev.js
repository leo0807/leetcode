"use strict";

function mergeSort(arr) {
  var len = arr.length;
  var middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var res = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  while (left.length) {
    res.push(left.shift());
  }

  while (right.length) {
    res.push(right.shift());
  }

  return res;
}