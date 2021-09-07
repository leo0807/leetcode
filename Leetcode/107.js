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
var levelOrderBottom = function (root) {
    if (!root) return [];
    const queue = [root], res = [];
    while (queue.length) {
        // 当前层数的节点长度
        const n = queue.length;
        let tmp = [];
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            tmp.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //  对头插入
        res.unshift(tmp);
    }
    return res;
};