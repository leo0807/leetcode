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

// 双指针法
// 来源 https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode-solution/
// 设链表中环外部分的长度为 aa。\textit{slow}slow 指针进入环后，又走了 bb 的距离与 \textit{fast}fast 相遇。此时，\textit{fast}fast 指针已经走完了环的 nn 圈，因此它走过的总距离为 a+n(b+c)+b=a+(n+1)b+nca+n(b+c)+b=a+(n+1)b+nc
// 即 fast = a + n(b + c) + b
//         = a + (n + 1)b + nc
//    slow = a + b
//    fast = 2 * slow
//    a = (n - 1)b + nc
// = (n - 1)(b + c) + c
//    n为循环的圈数，取n = 1 则有 ， a = c 
// 即 head 到 entry point的距离 等于 meeting point 到 entry point 的距离

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

// 使用HaspMap，如果有重复的值，则重复值则为入口点
var detectCycle = function (head) {
    const visited = new Set();
    while (head !== null) {
        if (visited.has(head)) {
            return head;
        }
        visited.add(head);
        head = head.next;
    }
    return null;
};
