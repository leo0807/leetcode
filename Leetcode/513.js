/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * BFC
 */
var findBottomLeftValue = function (root) {
  if (!root) return 0;
  const queue = [root];
  let res = root.val;
  while (queue.length) {
    const n = queue.length;
    let flag = true;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (flag && (node.left || node.right)) {
        if (node.left) {
          res = node.left.val;
        } else if (node.right) {
          res = node.right.val;
        }
        flag = false;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return res;
};


var findBottomLeftValue2 = function (root) {
  if (!root) return 0;
  const queue = [root];
  let res = root.val;
  while (queue.length) {
    const node = queue.shift();
    res = node.val;
    node.right && queue.push(node.right);
    node.left && queue.push(node.left);
  }
  return res;
};

// DFS
var findBottomLeftValue = function (root) {
  if (!root) return 0;
  let maxDepth = -Infinity, res = root.val;
  dfs(root, 0);
  return res;
  function dfs(root, depth) {
    if (root !== null) {
      if (!root.left && !root.right) {
        if (maxDepth < depth) {
          maxDepth = depth;
          res = root.val;
        }
      }
      dfs(root.left, depth + 1);
      dfs(root.right, depth + 1);
    }
  }
};