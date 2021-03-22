/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    if(!root) return [];
    let queue: [TreeNode, number, number[]][] = [[root, targetSum, [root.val]]],
        res: number[][] = [];
    while(queue.length){
        let [node, sum, path] = queue.shift();
        let curr: number = sum - node.val;
        curr === 0 && !node.left && !node.right && res.push(path);
        node.left && queue.push([node.left, curr, [...path, node.left.val]]);
        node.right && queue.push([node.right, curr, [...path, node.right.val]]);
    }
    return res;
};