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
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    if (!head) return new Array(k).fill(head);
    const res = [];
    let currNode = head, len = 0;
    while (currNode) {
        currNode = currNode.next;
        len++;
    }
    const group = Math.floor(len / k);
    let remainder = len % k;
    currNode = head;
    let prevNode = null;
    for (let i = 0; i < k; i++, remainder--) {
        res[i] = currNode;
        for (let j = 0; j < group + (remainder > 0); j++) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        prevNode.next = null;
    }
    return res;
};