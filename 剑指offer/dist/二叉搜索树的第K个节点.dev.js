"use strict";

function KthNode(pRoot, k) {
  // write code here
  var list = [];
  middleTraverse(pRoot);

  function middleTraverse(pRoot) {
    if (pRoot != null) {
      middleTraverse(pRoot.left);
      list.push(pRoot);
      middleTraverse(pRoot.right);
    }
  }

  return list[k - 1];
}