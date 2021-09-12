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
var minDepth = function (root) {
    if (!root) return 0;
    const queue = [[root, 1]];
    while (queue.length) {
        const [node, level] = queue.shift();
        if (!node.left && !node.right) return level;
        node.left && queue.push([node.left, level + 1]);
        node.right && queue.push([node.right, level + 1]);
    }
    return 0;
};