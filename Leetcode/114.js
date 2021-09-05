var prev = null;
var flatten = function (root) {

    if (root === null) return;
    flatten(root.right);
    flatten(root.left);
    root.right = prev;
    root.left = null;
    prev = root;
};

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten2 = function (root) {
    if (!root) return null;
    flatten(root.left);
    flatten(root.right);
    let left = root.left, right = root.right;
    root.left = null;
    root.right = left;
    let node = root;
    while (node.right) {
        node = node.right;
    }
    node.right = right;
};