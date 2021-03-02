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

function postorderTraversal(root: TreeNode | null): number[] {
    let res: number[] = [];
    if(!root) return res;
    let stack: TreeNode[] = [root];;
    while(stack.length){
        let node: TreeNode | null = stack[stack.length - 1];
        if(node.left){
            stack.push(node.left);
            node.left = null;
        }else if(node.right){
            stack.push(node.right);
            node.right = null;
        }else{
            res.push(stack.pop().val);
        }
    }
    return res;
};
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

function postorderTraversal2(root: TreeNode | null): number[] {
    let res: number[] = [];
    recursive(root, res);
    return res;

};
function recursive(root: TreeNode | null, res: number[]): void {
    if(!root) return;
    recursive(root.left, res);
    recursive(root.right, res);
    res.push(root.val);
};