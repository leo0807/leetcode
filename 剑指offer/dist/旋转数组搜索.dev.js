"use strict";

function search(A, target) {
  // write code here
  var left = 0,
      right = A.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (A[mid] === target) {
      return mid;
    }

    if (A[mid] >= A[left]) {
      //             左侧有序
      if (A[mid] > target && A[left] <= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      //             右侧有序
      if (A[mid] < target && A[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}