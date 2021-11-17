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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;
  if (key < root.val) {
    let left = deleteNode(root.left, key);
    root.left = left;
  } else if (key > root.val) {
    let right = deleteNode(root.right, key);
    root.right = right;
  } else {
    let left = root.left;
    let right = root.right;
    //寻找右侧最小的叶子节点, 因为右侧均大于左侧，二叉搜素树性质
    while (right !== null && right.left !== null) {
      right = right.left;
    }
    //如果存在右侧最小的叶子节点，将root的左子树拼接到右侧最小叶子节点的左子树
    if (right) {
      right.left = left;
      return root.right;
    } else {
      //如果不存在右侧最小的叶子节点，root的右子树为空，直接返回左子树
      return left;
    }
  }
  return root;
};