/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 分治法， 归并排序
var mergeKLists = function (lists) {
    return divideFunc(lists, 0, lists.length - 1);
};
function divideFunc(lists, left, right) {
    if (left === right) return lists[left];
    if (left > right) return null;
    const mid = (left + right) >> 1;
    return mergeTwoLists(divideFunc(lists, left, mid), divideFunc(lists, mid + 1, right));
}
function mergeTwoLists(l1, l2) {
    if (!l1 || !l2) return l1 !== null ? l1 : l2;
    let head = new ListNode(-1), res = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            res.next = l1;
            l1 = l1.next;
        } else {
            res.next = l2;
            l2 = l2.next;
        }
        res = res.next;
    }
    res.next = l1 === null ? l2 : l1;
    return head.next;
}

var mergeKLists = function (lists) {
    const res = new ListNode(0);
    let cur = res, arr = [];
    for (let i = 0, n = lists.length; i < n; i++) {
        let node = lists[i];
        while (node) {
            arr.push(node.val);
            node = node.next;
        }
    }
    arr.sort((a, b) => a - b);
    while (arr.length) {
        cur.next = new ListNode(arr.shift());
        cur = cur.next
    }
    return res.next;
};