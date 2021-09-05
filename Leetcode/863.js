/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    if (!root) return [];
    const map = new Map();
    const findParentNode = function (node) {
        if (node.left) {
            map.set(node.left.val, node);
            findParentNode(node.left);
        }
        if (node.right) {
            map.set(node.right.val, node);
            findParentNode(node.right);
        }
    }
    findParentNode(root);
    const res = [], queue = [[target, 0]], set = new Set([target]);
    while (queue.length) {
        const [node, depth] = queue.shift();
        depth === k && res.push(node.val);
        if (node.left && !set.has(node.left)) {
            queue.push([node.left, depth + 1]);
            set.add(node.left);
        }
        if (node.right && !set.has(node.right)) {
            queue.push([node.right, depth + 1]);
            set.add(node.right);
        }
        if (map.has(node.val) && !set.has(map.get(node.val))) {
            queue.push([map.get(node.val), depth + 1]);
            set.add(map.get(node.val));
        }
    }
    return res;
};