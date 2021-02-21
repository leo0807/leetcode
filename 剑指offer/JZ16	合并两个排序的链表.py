# -*- coding:utf-8 -*-
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    # 返回合并后列表
    def Merge(self, pHead1, pHead2):
        # write code here
        res = ListNode(-1)
        cur = res
        while pHead1 != None and pHead2 != None:
            if pHead1.val < pHead2.val:
                cur.next = pHead1
                pHead1 = pHead1.next
            else:
                cur.next = pHead2
                pHead2 = pHead2.next
            cur = cur.next
        if pHead1 != None:
            cur.next = pHead1
        if pHead2 != None:
            cur.next = pHead2
            
        return res.next