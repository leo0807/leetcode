/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
  // write code here
  let t1 = pHead1, t2 = pHead2;
  while (t1 !== t2) {
    t1 = t1 ? t1.next : pHead2;
    t2 = t2 ? t2.next : pHead1;
  }
  return t2;
}
module.exports = {
  FindFirstCommonNode: FindFirstCommonNode
};