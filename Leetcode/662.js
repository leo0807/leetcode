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


var widthOfBinaryTree2 = function (root) {
    if (!root) {
        return 0
    }
    let ans = 1, que = [[0, root]]
    while (que.length) {
        ans = Math.max(ans, que[que.length - 1][0] - que[0][0] + 1)
        let tmp = []
        for (const [i, q] of que) {
            q.left && tmp.push([i * 2, q.left])
            q.right && tmp.push([i * 2 + 1, q.right])
        }
        if (que[0][0] > 1 << 31) {
            tmp.forEach(v => v[0] -= que[0][0])
        }
        que = tmp
    }
    return ans
};