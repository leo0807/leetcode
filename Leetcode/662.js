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
    let max = 0n;
    // if(!root) return 0;
    const queue = [[root, 0n]];
    while (queue.length) {
        const n = queue.length;
        let maxVal = queue[n - 1][1], minVal = queue[0][1];
        max = max > maxVal - minVal + 1n ? max : maxVal - minVal + 1n;
        for (let i = 0; i < n; i++) {
            const [node, val] = queue.shift();

            node.left && queue.push([node.left, 2n * val]);
            node.right && queue.push([node.right, 2n * val + 1n]);
        }
    }
    return max;
};