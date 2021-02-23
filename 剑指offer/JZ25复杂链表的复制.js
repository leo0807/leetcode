function RandomListNode(x) {
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead) {
    // write code here
    if (!pHead) return pHead;
    let res = new RandomListNode(pHead.label);
    let cur = res;
    while (pHead) {
        if (!pHead.next) {
            cur.next = null;
        } else {
            cur.next = new RandomListNode(pHead.next.label);
        }
        if (!pHead.random) {
            cur.random = null;
        } else {
            cur.random = new RandomListNode(pHead.random.label);
        }
        cur = cur.next;
        pHead = pHead.next;
    }
    return res;
}
module.exports = {
    Clone: Clone
};