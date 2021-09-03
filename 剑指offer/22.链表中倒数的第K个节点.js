// 输出倒数第k个节点

function getkthElement(head, k) {
    let stack = [];
    while (head) {
        stack.push(head);
        head = head.next;
    }
    let res = null;
    while (k) {
        res = stack.pop()
        k--;
    }
    return res.val;
}
function FindKthToTail(head, k) {
    // write code here
    if (!head || k <= 0) return null;
    let slow = head,
        fast = head;
    while (k--) {
        if (fast) fast = fast.next;
        else return null;
    }
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let p = head;
    while (k--) p = p.next;
    if (!p) return head;
    while (p) {
        p = p.next;
        head = head.next;
    }
    return head;
};