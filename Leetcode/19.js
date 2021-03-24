/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (!head || n < 1) return head;
    let res = new ListNode(0);
    res.next = head;
    p = res, q = res;
    while (p && n >= 0) {
        n--;
        p = p.next;
    }
    if (n > 0) return [];
    while (p) {
        p = p.next;
        q = q.next;
    }
    q.next = q.next.next;
    return res.next;
};