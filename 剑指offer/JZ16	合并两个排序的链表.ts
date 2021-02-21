/*class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param pHead1 ListNode类 
 * @param pHead2 ListNode类 
 * @return ListNode类
 */
export function Merge(pHead1: ListNode, pHead2: ListNode): ListNode {
    // write code here
    let res: ListNode = new ListNode(-1);
    let cur: ListNode = res;
    while(pHead1 && pHead2){
        if(pHead1.val < pHead2.val){
            cur.next = pHead1;
            pHead1 = pHead1.next;
        }else{
            cur.next = pHead2;
            pHead2 = pHead2.next;
        }
        cur = cur.next;
    }
    if(pHead1){
        cur.next = pHead1;
    }
    if(pHead2){
        cur.next = pHead2;
    }
    return res.next;
}