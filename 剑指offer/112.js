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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let queue = [[root, root.val]];

    while (queue.length !== 0) {
        let [node, sum] = queue.shift();
        if (!node.left && !node.right && sum === targetSum) return true;
        node.left && queue.push([node.left, sum + node.left.val]);
        node.right && queue.push([node.right, sum + node.right.val]);
    }
    return false;
};
