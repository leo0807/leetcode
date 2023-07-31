/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode node){
        ListNode prev = null;
        while(node != null) {
            ListNode temp = node.next;
            node.next = prev;
            prev = node;
            node = temp;
        }
        return prev;
    }
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode rev1 = reverseList(l1);
        ListNode rev2 = reverseList(l2);

        int totalSum = 0, add = 0;
        ListNode ans = new ListNode();
        while(rev1 != null || rev2 != null){
            if (rev1 != null) totalSum += rev1.val;
            if (rev2 != null) totalSum += rev2.val;
            ans.val = totalSum % 10;
            add = totalSum / 10;
            ListNode head = new ListNode(add);
            head.next = ans;
            ans = head;
            totalSum = add;

            rev1 = rev1 != null ? rev1.next : null;
            rev2 = rev2 != null ? rev2.next : null;
        }
        return add != 0 ? ans : ans.next;
    }
}