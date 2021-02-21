
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param root TreeNode类 
 * @param expectNumber int整型 
 * @return int整型二维数组
 */
export function FindPath(root: TreeNode, expectNumber: number): number[][] {
    // write code here
    let res: number[][] = [],
        tmp: number[] = [];
    if (!root) return res;
    findPath(root, expectNumber);
    return res;

    function findPath(root: TreeNode, num: number): void {
        tmp.push(root.val);
        if (root.val === num && !root.left && !root.right) {
            res.push(tmp.slice());
        }
        root.left && findPath(root.left, num - root.val);
        root.right && findPath(root.right, num - root.val);
        tmp.pop();
    }

}
