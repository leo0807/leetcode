/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let p1 = head, p2 = head, isCycled = false;
    if (!p1 || !p1.next) return null;
    while (p1.next !== null && p1.next.next !== null) {
        p1 = p1.next.next;
        p2 = p2.next;
        if (p1 === p2) {
            isCycled = true;
            break;
        }
    }
    if (!isCycled) {
        return null;
    } else {
        let q = head;
        while (p2 != q) {
            q = q.next;
            p2 = p2.next;
        }
        return q;
    }
};