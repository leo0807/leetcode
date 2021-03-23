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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let queue = [root],
        left = true, res = [];
    while (queue.length) {
        const size = queue.length;
        let temp = [];
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            temp.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        left === false && temp.reverse();
        res.push(temp);
        left = !left;
    }
    return res;
};