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
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  const queue = [root];
  let res = 0;
  while (queue.length) {
    const node = queue.shift();
    if (node.left && (!node.left.right && !node.left.left)) {
      res += node.left.val;

    }
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
};