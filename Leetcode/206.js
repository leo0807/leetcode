//  递归
//  按照 1，2，3，4，5为例子
var reverseList = function (head) {
    if (!head || !head.next) return head;
    const res = reverseList(head.next);
    // 最后的节点 head.next指向4
    // 5指向4实现反转
    head.next.next = head;
    // 断开正向的连接
    head.next = null;
    return res;
};

// 双指针
var reverseList = function (head) {
    if (!head) return head;
    // prev为之前的节点；curr为当前所在节点
    let prev = null, curr = head;
    // 从头开始遍历
    while (curr) {
        // 伪节点，用于后续当前节点的向后移动
        let tmp = curr.next;
        // 当前节点指向之前一个节点
        curr.next = prev
        // 当前节点成为前一个节点
        prev = curr;
        // 此时当前节点后移
        curr = tmp;
    }
    return prev;
};