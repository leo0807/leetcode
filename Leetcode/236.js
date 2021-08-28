/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root === null || root === p || root === q) return root;
    let stack = [[null, root]], map = {};
    while (stack.length) {
        let [parent, node] = stack.pop();
        node.parent = parent;
        node.left && stack.push([node, node.left]);
        node.right && stack.push([node, node.right]);
    }
    while (p) {
        map[p.val] = true;
        p = p.parent;
    }
    while (q) {
        if (map[q.val]) return q;
        q = q.parent;
    }
};