
    export function printListFromTailToHead(head: ListNode): number[] {
    // write code here
    let pre: ListNode = null;
    let cur: ListNode = head;
    let temp: ListNode = cur;
    while(cur){
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    
    let res: number[] = [];
    while(pre){
        res.push(pre.val);
        pre = pre.next;
    }
    return res;
}