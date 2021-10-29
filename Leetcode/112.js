var hasPathSum = function (root, sum) {
    let res = [];
    if (!root) return res;
    let queue = [[root, [], 0]];
    while (queue.length) {
        let [node, path, curVal] = queue.shift();
        const tmp = [...path, node.val];
        curVal += node.val;
        if (node.left === null && node.right === null) {
            console.log(1)
            if (curVal == sum) {
                res.push(tmp);
            }
        } else {
            if (node.right) {
                queue.push([node.right, tmp, curVal]);
            }
            if (node.left) {
                queue.push([node.left, tmp, curVal]);
            }
        }
    }
    return res;
};

function pathSum(root, sum) {
    // write code here
    let res = [];
    if (!root) return res;
    dfs(root, [], sum, res);
    return res;
}
function dfs(node, path, sum, res) {
    if (!node) return;
    sum -= node.val
    const tmp = [...path, node.val];
    if (!node.left && !node.right && sum === 0) {
        res.push(tmp);
    }
    node.left && dfs(node.left, tmp, sum, res);
    node.right && dfs(node.right, tmp, sum, res);
}



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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let queue = [[root, root.val]];

    while (queue.length !== 0) {
        let [node, sum] = queue.shift();
        if (!node.left && !node.right && sum === targetSum) return true;
        node.left && queue.push([node.left, sum + node.left.val]);
        node.right && queue.push([node.right, sum + node.right.val]);
    }
    return false;
};
