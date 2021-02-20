"use strict";

var rightSideView = function rightSideView(root) {
  var res = [];

  function dfs(node, res, depth) {
    if (!node) return;

    if (depth === res.length) {
      res.push(node.val);
    }

    dfs(node.right, res, depth + 1);
    dfs(node.left, res, depth + 1);
  }

  dfs(root, res, 0);
  return res;
}; // BFS


var rightSideView1 = function rightSideView1(root) {
  var res = [],
      queue = [root];

  if (!root) {
    return res;
  }

  while (queue.length) {
    var len = queue.length;

    for (var i = 0; i < len; i++) {
      var curNode = queue.shift();

      if (i === len - 1) {
        res.push(curNode.val);
      }

      if (curNode.left) {
        queue.push(curNode.left);
      }

      if (curNode.right) {
        queue.push(curNode.right);
      }
    }
  }

  return res;
};