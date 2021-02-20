"use strict";

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function buildHeap(arr) {
  var n = arr.length;

  for (var i = Math.floor((n - 1) / 2); i >= 0; i--) {
    heapify(arr, n, i);
  }
}

function heapify(arr, n, i) {
  var left = 2 * i + 1,
      right = 2 * i + 2,
      max = i;

  if (left < n && arr[left] > arr[max]) {
    max = left;
  }

  if (right < n && arr[right] > arr[max]) {
    max = right;
  }

  if (max != i) {
    swap(arr, i, max);
    heapify(arr, n, max);
  }
}

function heapSort(arr) {
  var n = arr.length;
  buildHeap(arr);

  for (var i = n - 1; i >= 0; i--) {
    swap(arr, 0, i);
    n--;
    heapify(arr, n, 0);
  }

  console.log(arr);
  return arr;
}

var tmp = [32, 4, 231, 42, 2, 6, 6, 7, 11];
heapSort(tmp);