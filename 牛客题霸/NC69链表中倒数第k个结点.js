/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
function FindKthToTail(pHead, k) {
    // write code here
    let tmp = pHead;
    for (let i = 0; i < k; i++) {
        if (!tmp) return null;
        tmp = tmp.next;
    }
    let res = pHead;
    while (tmp) {
        tmp = tmp.next;
        res = res.next;
    }
    return res;
}
module.exports = {
    FindKthToTail: FindKthToTail
};