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
var sortList = function (head) {
    if (!head || !head.next) return head;
    let slow = head, fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let startNode = slow.next;
    // 断开中间连接处
    slow.next = null;
    let l1 = sortList(head), l2 = sortList(startNode);
    let res = new ListNode(-1), currNode = res;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            currNode.next = l1;
            l1 = l1.next;
        } else {
            currNode.next = l2;
            l2 = l2.next;
        }
        currNode = currNode.next;
    }
    if (l1) currNode.next = l1;
    if (l2) currNode.next = l2;
    return res.next;
};