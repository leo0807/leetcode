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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (!root) return [];
    let queue = [[root, `${root.val}`]], res = [];
    while (queue.length) {
        let [node, str] = queue.shift();
        !node.left && !node.right && res.push(str);
        node.left && queue.push([node.left, `${str}->${node.left.val}`]);
        node.right && queue.push([node.right, `${str}->${node.right.val}`]);
    }
    return res;
};