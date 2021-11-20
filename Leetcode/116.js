/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root || !root.left) return root;
    root.left.next = root.right;
    if (root.next) {
        root.right.next = root.next.left;
    }
    root.left = connect(root.left);
    root.right = connect(root.right);
    return root;
};

var connect = function (root) {
    if (!root) return root;
    const queue = [root];
    while (queue.length) {
        const n = queue.length;
        const tmp = [];
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            tmp.push(node);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        for (let i = 1; i < tmp.length; i++) {
            tmp[i - 1].next = tmp[i];
        }
        tmp[tmp.length - 1].next = null;
    }
    return root;
};