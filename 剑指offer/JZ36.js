/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  // 中序遍历
  if (root == null) return root;
  let path = [], cur = root;
  let last = null
  let head = null
  while (path.length != 0 || cur != null) {
    while (cur) {
      path.push(cur)
      cur = cur.left;
    }
    cur = path.pop()
    if (head == null) head = cur;
    if (last) {
      last.right = cur;
      cur.left = last
    }
    last = cur;

    cur = cur.right;
  }
  head.left = last
  last.right = head;
  return head;
};
