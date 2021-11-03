// 取链表的内存地址
// 在Leetcode中取得链表地址
class Solution
{
public:
    ListNode *detectCycle(ListNode *head)
    {
        while (head)
        {
            if (!less<ListNode *>()(head, head->next))
            {
                return head->next;
            }
            head = head->next;
        }
        return nullptr;
    }
};