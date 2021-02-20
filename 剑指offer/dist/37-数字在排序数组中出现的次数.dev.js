"use strict";

// 统计一个数字在升序数组中出现的次数。
// [1, 2, 3, 3, 3, 3, 4, 5], 3
// 4
function GetNumberOfK(data, k) {
  // write code here
  var left = 0,
      right = data.length,
      lbound,
      rbound;

  while (left < right) {
    var mid = Math.floor((left + right) / 2);

    if (data[mid] < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  lbound = left;
  left = 0, right = data.length;

  while (left < right) {
    var _mid = Math.floor((left + right) / 2);

    if (data[_mid] <= k) {
      left = _mid + 1;
    } else {
      right = _mid;
    }
  }

  rbound = left;
  return rbound - lbound;
}

function GetNumberOfK1(data, k) {
  // write code here
  var left = 0,
      right = data.length,
      index,
      res = 0;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (data[mid] === k) {
      index = mid;
      break;
    } else if (data[mid] < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  if (index == null) {
    return -1;
  }

  for (var i = index - 1; i >= 0 && data[i] == k; i--) {
    res++;
  }

  for (var _i = index, len = data.length; _i < len && data[_i] == k; _i++) {
    res++;
  }

  return res;
}

console.log(GetNumberOfK1([1, 2, 3, 3, 3, 3, 4, 5], 3));