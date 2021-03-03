/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    var res = [];
    function dfs(root) {
        if (!root) return;
        var len = root.children.length;
        for (let i of root.children) {
            dfs(i);
        }
        res.push(root.val);
    }
    dfs(root);
    return res;
};