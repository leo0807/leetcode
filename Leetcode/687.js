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
var longestUnivaluePath = function (root) {
    if (!root) return 0;
    let max = 0;
    dfs(root);
    return max;

    function dfs(root) {
        if (!root) return 0;
        let left = dfs(root.left),
            right = dfs(root.right);
        if (left && root.val !== root.left.val) {
            left = 0;
        }
        if (right && root.val !== root.right.val) {
            right = 0;
        }
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }
};