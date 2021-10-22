/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head || !head.next) return head;
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let currNode = slow.next, prev = null;
    while (currNode) {
        let tmpNode = currNode.next;
        currNode.next = prev;
        prev = currNode;
        currNode = tmpNode;
    }
    slow.next = null;
    let head1 = head, head2 = prev;
    while (head2) {
        let next = head1.next;
        head1.next = head2;
        head1 = head2;
        head2 = next;
    }
    return head;
};