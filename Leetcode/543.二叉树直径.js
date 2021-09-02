var diameterOfBinaryTree = function (root) {
    let max = 0;
    if (!root) return 0;
    function dfs(node) {
        if (!node) return 0;
        let left = dfs(node.left),
            right = dfs(node.right);
        // 有可能子树的直径已经超过根节点的直径
        max = Math.max(left + right, max);
        return Math.max(left, right) + 1;
    }
    dfs(root);
    return max;
};
//直径就是树中任意两个最短点的最大距离

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
var diameterOfBinaryTree1 = function (root) {
    let max = 0;
    getMaxDia(root);
    return max;
    function getMaxDia(root) {
        if (root.left === null && root.right === null) return 0;
        let left = root.left === null ? 0 : 1 + getMaxDia(root.left);
        let right = root.right === null ? 0 : 1 + getMaxDia(root.right);
        max = Math.max(left + right, max);
        return Math.max(left, right);
    }
};