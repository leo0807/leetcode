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
 */
var distributeCoins = function (root) {
  let sum = 0;
  const dfs = (node) => {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    sum += Math.abs(left + right + node.val - 1);
    return left + right + node.val - 1;
  }
  dfs(root);
  return sum;
};