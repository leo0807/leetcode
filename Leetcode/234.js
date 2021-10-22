/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // TODO: Write your code here
    if (!head) return true;
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let curNode = slow, prev = null;
    while (curNode) {
        let tmp = curNode.next;
        curNode.next = prev;
        prev = curNode;
        curNode = tmp;
    }
    let newNode = head;
    while (prev && newNode) {
        if (prev.val !== newNode.val) return false;
        prev = prev.next;
        newNode = newNode.next;
    }
    return true;

};