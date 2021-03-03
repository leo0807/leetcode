/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution
{
    private int res = 0;
    public int GoodNodes(TreeNode root)
    {
        Dfs(root, Int32.MinValue);
        return res;
    }

    public void Dfs(TreeNode root, int val)
    {
        if (root == null) return;
        if (root.val >= val) res++;
        Dfs(root.left, Math.Max(root.val, val));
        Dfs(root.right, Math.Max(root.val, val));
    }
}