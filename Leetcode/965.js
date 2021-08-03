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
var isUnivalTree = function (root) {
    var queue = [root],
        rootVal = root.val;
    while (queue.length) {
        var node = queue.shift();
        if (node.val != rootVal) return false;
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return true;
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
 * @return {boolean}
 */
var isUnivalTree2 = function (root, val = -1) {
    if (!root) return true;
    if (val < 0) val = root.val;
    return root.val === val && isUnivalTree2(root.left, val) &&
        isUnivalTree2(root.right, val);
};