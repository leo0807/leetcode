/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n <= 0) {
        return [];
    }
    return findUnique_trees_recursive(1, n);
};

function findUnique_trees_recursive(start, end) {
    const result = [];
    // base condition, return 'null' for an empty sub-tree
    // consider n = 1, in this case we will have start = end = 1, this means we should have only one tree
    // we will have two recursive calls, findUniqueTreesRecursive(1, 0) & (2, 1)
    // both of these should return 'null' for the left and the right child
    if (start > end) {
        result.push(null);
        return result;
    }

    for (let i = start; i < end + 1; i++) {
        // making 'i' the root of the tree
        const leftSubtrees = findUnique_trees_recursive(start, i - 1);
        const rightSubtrees = findUnique_trees_recursive(i + 1, end);
        for (let p = 0; p < leftSubtrees.length; p++) {
            for (let q = 0; q < rightSubtrees.length; q++) {
                const root = new TreeNode(i, leftSubtrees[p], rightSubtrees[q]);
                result.push(root);
            }
        }
    }

    return result;
}