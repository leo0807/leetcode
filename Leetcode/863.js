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
    const res = [];
    if (!root) return res;
    const map = new Map();
    const findParents = function (root) {
        if (root.left) {
            map.set(root.left.val, root);
            findParents(root.left);
        }
        if (root.right) {
            map.set(root.right.val, root);
            findParents(root.right);
        }
    }

    const findAns = (node, from, depth, k) => {
        if (node == null) {
            return;
        }
        if (depth === k) {
            res.push(node.val);
            return;
        }
        if (node.left !== from) {
            findAns(node.left, node, depth + 1, k);
        }
        if (node.right !== from) {
            findAns(node.right, node, depth + 1, k);
        }
        if (map.get(node.val) !== from) {
            findAns(map.get(node.val), node, depth + 1, k);
        }
    }
    findParents(root);
    findAns(target, null, 0, k);
    return res;
};