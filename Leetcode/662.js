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
var widthOfBinaryTree = function (root) {
    if (!root) return 0;
    let queue = [[root, 0n]];
    let max = 0n;
    while (queue.length) {
        const n = queue.length;
        let left = queue[0][1], right = 0, tmp = [];

        for (let i = 0; i < n; i++) {
            const [node, pos] = queue[i];

            if (node.left) {
                right = pos * 2n;
                tmp.push([node.left, right]);
            }
            if (node.right) {
                right = pos * 2n + 1n;
                tmp.push([node.right, right]);
            }
            right = pos;
        }

        queue = tmp;
        max = max > right - left + 1n ? max : right - left + 1n;
    }
    return max;
};