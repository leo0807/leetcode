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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    let map = new Map();
    let res = [];
    dfs(root, map, res);
    return res;
};

function dfs(root, map, res) {
    if (!root) return '#'
    const key = `${root.val}.${dfs(root.left, map, res)}.${dfs(root.right, map, res)}`
    map.set(key, 1 + (map.get(key) || 0));
    map.get(key) === 2 && res.push(root);
    return key;
}