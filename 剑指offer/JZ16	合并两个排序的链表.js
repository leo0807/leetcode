function ListNode(x) {
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2) {
    // write code here
    let res = new ListNode("node");
    let cur = res;
    while (pHead1 && pHead2) {
        if (pHead1.val < pHead2.val) {
            cur.next = pHead1;
            pHead1 = pHead1.next;
        } else {
            cur.next = pHead2;
            pHead2 = pHead2.next;
        }
        cur = cur.next;
    }
    if (pHead1) {
        cur.next = pHead1;
    }
    if (pHead2) {
        cur.next = pHead2;
    }
    return res.next;
}