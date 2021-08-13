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
var maxAncestorDiff = function (root) {
    let queue = [[root, root.val, root.val]], res = 0;
    while (queue.length) {
        let [node, topAncestor, lowAncestor] = queue.shift();
        res = Math.max(res, Math.max(topAncestor - node.val, node.val - lowAncestor));
        topAncestor = Math.max(topAncestor, node.val);
        lowAncestor = Math.min(lowAncestor, node.val);
        node.left && queue.push([node.left, topAncestor, lowAncestor]);
        node.right && queue.push([node.right, topAncestor, lowAncestor]);
    }
    return res;
};