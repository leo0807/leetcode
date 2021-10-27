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
var oddEvenList = function (head) {
    if (!head) return head;
    let oddNode = head, evenNode = head.next, evenHead = evenNode;
    while (evenNode && evenNode.next) {
        oddNode.next = evenNode.next;
        oddNode = oddNode.next;
        evenNode.next = oddNode.next;
        evenNode = evenNode.next;
    }
    oddNode.next = evenHead;
    return head;

};