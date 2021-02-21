/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
    // write code here
    let res = [],
        tmp = [];
    if (!root) return res;
    isPath(root, expectNumber);
    return res;
    function isPath(root, expectNumber) {
        tmp.push(root.val);
        if (root.val === expectNumber && !root.left && !root.right) {
            res.push(tmp.slice());
        } else {
            if (root.left) isPath(root.left, expectNumber - root.val);
            root.right && isPath(root.right, expectNumber - root.val);
        }
        tmp.pop()
    }
}
/*class TreeNode {
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

