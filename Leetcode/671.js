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
var findSecondMinimumValue = function (root) {
    let node = root, stack = [], arr = [];
    while (node || stack.length != 0) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            let tmpNode = stack.pop();
            arr.push(tmpNode.val);
            node = tmpNode.right;
        }
    }
    arr.sort();
    let res = arr[0];
    for (const i of arr) {
        if (res < i) return i;
    }
    return -1;
};