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
var sumNumbers = function (root) {
    let queue = [[root, root.val.toString()]];
    let res = [];
    while (queue.length) {
        let [node, path] = queue.shift();
        if (!node.left && !node.right) {
            res.push(Number(path));
        }
        node.left && queue.push([node.left, path + node.left.val]);
        node.right && queue.push([node.right, path + node.right.val]);
    }
    return res.reduce((p, c) => p + c);
};