"use strict";

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function Serialize(pRoot) {
  // write code here
  if (pRoot === null) return '#';
  var left = Serialize(pRoot.left),
      right = Serialize(pRoot.right);
  return pRoot.val + "," + left + ',' + right;
}

function Deserialize(s) {
  // write code here
  return dfs(s.split(','));

  function dfs(arr) {
    var val = arr.shift();
    if (val == '#') return null;
    var root = new TreeNode(val);
    root.left = dfs(arr);
    root.right = dfs(arr);
    return root;
  }
}