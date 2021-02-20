"use strict";

function reOrderArray(array) {
  // write code here
  var len = array.length;

  for (var j = 0; j < len - 1; j++) {
    for (var i = len - 2; i >= 0; i--) {
      if (array[i] % 2 === 0) {
        swap(array, i, i + 1);
      }
    }
  }

  return array;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(reOrderArray(arr));