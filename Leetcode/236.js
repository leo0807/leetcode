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

function lowestCommonAncestor(root, o1, o2) {
    // write code here
    if (!root) return -1;
    if (root.val === o1 || root.val === o2) return root.val;
    let left = lowestCommonAncestor(root.left, o1, o2),
        right = lowestCommonAncestor(root.right, o1, o2);
    if (left === -1) return right;
    if (right === - 1) return left;
    return root.val;
}
function LCA(root, p, q) {
    if (!root || root.val === p || root.val === q) return root;
    let left = LCA(root.left, p, q),
        right = LCA(root.right, p, q);
    // 最有两个子树均找到了值
    // 则公共节点是root
    if (left && right) return root;
    return left ? left : right;
}