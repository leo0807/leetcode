/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let res = [];
    let queue = [root];

    while (queue.length) {
        let size = queue.length, tmp = [];
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            tmp.push(node.val);
            queue.push(...node.children);
        }
        res.push(tmp);
    }
    return res;
};