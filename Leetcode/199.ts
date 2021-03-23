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

function rightSideView(root: TreeNode | null): number[] {
    if(!root) return [];
    let res: number[] = [];
    let queue: TreeNode[] = [root];
    while(queue.length){
        let len:number = queue.length;
        for(let i = 0; i < len; i++){
            let node: TreeNode = queue.shift();
            i === len - 1 && res.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return res;
};