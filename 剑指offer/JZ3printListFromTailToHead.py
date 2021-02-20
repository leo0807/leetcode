class Solution:
    # 返回从尾部到头部的列表值序列，例如[1,2,3]
    def printListFromTailToHead(self, listNode):
        # write code here
        pre = None
        cur = listNode
        temp = cur
        while cur != None:
            temp = cur.next
            cur.next = pre
            pre = cur
            cur = temp
        res = []
        while pre != None:
            res.append(pre.val)
            pre = pre.next
        return res

    