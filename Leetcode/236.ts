class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
 

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if(!root) return null;
    if(p === root || q === root) return root;
    let left: TreeNode | null = lowestCommonAncestor(root.left, p, q);
    let right: TreeNode | null = lowestCommonAncestor(root.right, p, q);
    if(left && right) return root;
    if(!left) return right;
    if(!right) return left;
};