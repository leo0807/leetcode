"use strict";

// 二叉树的镜像
function mirror(root) {
  var res = null;

  if (root != null) {
    res = new TreeNode(root.val);
    res.left = mirror(root.left);
    res.right = mirrot(root.right);
  }

  return res;
}