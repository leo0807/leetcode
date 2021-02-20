function printListFromTailToHead(head) {
    // write code here
    let pre = null;
    let cur = head;
    let temp = cur;
    while (cur) {
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    let res = [];
    while (pre) {
        res.push(pre.val);
        pre = pre.next;
    }
    return res;
}