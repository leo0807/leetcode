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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    return recursiveTraversal(root, [])[k - 1];
};

function recursiveTraversal(root, arr) {
    if (!root) return arr;
    recursiveTraversal(root.left, arr);
    arr.push(root.val);
    recursiveTraversal(root.right, arr);
    return arr;
}