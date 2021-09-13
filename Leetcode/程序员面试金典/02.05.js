/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const node = new ListNode(-1);
    let currNode = node, add = 0;
    while (l1 || l2) {
        let num1 = l1 !== null ? l1.val : null;
        let num2 = l2 !== null ? l2.val : null;
        let tmpVal = num1 + num2 + add;
        if (tmpVal > 9) {
            tmpVal %= 10;
            add = 1;
        } else {
            add = 0;
        }
        currNode.next = new ListNode(tmpVal);
        currNode = currNode.next;
        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;
    }
    if (add) {
        currNode.next = new ListNode(1);
    }
    return node.next;
};