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
var countNodes = function (root) {
  if (!root) return 0;
  let res = 0;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    res++;
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
};



// Recursion
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
var countNodes = function(root) {
    let res = 0;
    var count = function (node) {
        if (!node) return;
        res++;
        count(node.left);
        count(node.right);
    }
    count(root);
    return res;
};

