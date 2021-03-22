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

function levelOrder(root: TreeNode | null): number[][] {
    if(!root) return [];
    let queue: [TreeNode, number][] = [[root, 0]],
        res: number[][] = [];
    while(queue.length){
        let [node, level] = queue.shift();
        res[level] = res[level] ? res[level]: [];
        res[level].push(node.val);
        node.left && queue.push([node.left, level + 1]);
        node.right && queue.push([node.right, level + 1]);
    }
    return res;
};