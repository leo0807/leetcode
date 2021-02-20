"use strict";

// 递归
function maxDepth(root) {
  if (root === null) return 0;
  var leftDepth = maxDepth(root.left);
  var righDepth = maxDepth(root.right);
  return Math.max(leftDepth, righDepth) + 1;
}