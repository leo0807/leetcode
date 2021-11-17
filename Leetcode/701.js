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
 * @param {number} val
 * @return {TreeNode}
 */
// 例如插入元素10 ，需要找到末尾节点插入便可，
// 一样的道理来插入元素15，插入元素0，插入元素6，** 需要调整二叉树的结构么？ 并不需要。**。
// 只要遍历二叉搜索树，找到空节点 插入元素就可以了，那么这道题其实就简单了。
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);
  if (root.val < val) root.right = insertIntoBST(root.right, val);
  else root.left = insertIntoBST(root.left, val);
  return root;
};