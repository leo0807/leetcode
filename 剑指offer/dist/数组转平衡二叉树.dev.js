"use strict";

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function sortedArrayToBST(num) {
  // write code here
  return build(num, 0, num.length - 1);
}

function build(arr, left, right) {
  if (left > right) return null;
  var mid = Math.floor((left + right + 1) / 2);
  var root = new TreeNode(arr[mid]);
  root.left = build(arr, left, mid - 1);
  root.right = build(arr, mid + 1, right);
  return root;
}

function sortedArrayToBST1(num) {
  if (!num.length) return null;
  var mid = Math.floor(num.length / 2);
  var node = new TreeNode(num[mid]);
  node.left = sortedArrayToBST(num.slice(0, mid));
  node.right = sortedArrayToBST(num.slice(mid + 1));
  return node;
}