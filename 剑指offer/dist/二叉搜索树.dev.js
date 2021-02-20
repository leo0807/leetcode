"use strict";

function judgeIt(root) {
  // write code here
  return [dfs(root), isComplete(root)];
}

function dfs(root) {
  var pre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -Infinity;
  if (!root) return true;
  if (!dfs(root.left, pre)) return false;

  if (root.val > pre) {
    pre = root.val;
  } else return false;

  return dfs(root.right, pre);
}

function isFullTree(node) {
  if (!node) return true;
  if (!node.left && node.right) return false;
  return isFullTree(node.left) && isFullTree(node.right);
}

function isComplete(root) {
  if (!root) return;
  var queue = [root],
      getNull = false;

  while (queue.length) {
    var len = queue.length;

    for (var i = 0; i < len; i++) {
      var node = queue.shift();

      if (!node.left) {
        getNull = true;
      } else {
        if (getNull) return false;else queue.push(node.left);
      }

      if (!node.right) {
        getNull = true;
      } else {
        if (getNull) return false;else queue.push(node.right);
      }
    }
  }

  return true;
}

function isBST1(root) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -Infinity;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return isBST1(root.left, min, root.val) && isBST1(root.right, root.val, max);
}

function isBST2(root) {
  if (!root) return true;

  if (root.left) {
    if (root.left.val > root.val) return false;
    if (root.left.right && root.left.right > root.val) return false;
  }

  if (root.right) {
    if (root.right < root.val) return false;
    if (root.right.left && root.right.left < root.val) return false;
  }

  return isBST2(root.left) && isBST2(root.right);
}