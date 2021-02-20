"use strict";

function bubbleSort(arr) {
  var len = arr.length;

  for (var i = len - 1; i >= 0; i--) {
    for (var j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

function swap(arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

var tmp = [32, 4, 231, 42, 2, 6, 6, 7, 11];
bubbleSort(tmp);
console.log(tmp);