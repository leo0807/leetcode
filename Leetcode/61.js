/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next || k <= 0) return head;
    let len = 1, currNode = head;
    while (currNode.next) {
        currNode = currNode.next;
        len++;
    }
    currNode.next = head;
    k %= len;
    let skipLen = len - k - 1;
    currNode = head
    while (skipLen--) {
        currNode = currNode.next;
    }
    head = currNode.next;
    currNode.next = null;
    return head;
};