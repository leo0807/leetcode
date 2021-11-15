/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let currNode = head, tmp = dummyNode;
  while (currNode && currNode.next) {
    if (currNode.val === currNode.next.val) {
      while (currNode.next && currNode.val === currNode.next.val) {
        currNode = currNode.next;
      }
      tmp.next = currNode.next;
    } else {
      tmp = tmp.next;
    }
    currNode = tmp.next;
  }

  return dummyNode.next;
};