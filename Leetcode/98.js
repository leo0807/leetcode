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
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (!root) return true;
    let res = [];
    traverse(root, res);
    for (let i = 0, len = res.length; i < len - 1; i++) {
        if (res[i] >= res[i + 1]) {
            return false;
        }
    }
    return true;
};

function traverse(root, res) {
    if (!root) return;
    traverse(root.left, res);
    res.push(root.val);
    traverse(root.right, res);
}