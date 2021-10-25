from __future__ import print_function
from heapq import *


class ListNode:
    def __init__(self, value):
        self.value = value
        self.next = None

    # used for the min-heap
    def __lt__(self, other):
        return self.value < other.value


def merge_lists(lists):
    minHeap = []

    # put the root of each list in the min heap
    for root in lists:
        if root is not None:
            heappush(minHeap, root)

    # take the smallest(top) element form the min-heap and add it to the result
    # if the top element has a next element add it to the heap
    resultHead, resultTail = None, None
    while minHeap:
        node = heappop(minHeap)
        if resultHead is None:
            resultHead = resultTail = node
        else:
            resultTail.next = node
            resultTail = resultTail.next

        if node.next is not None:
            heappush(minHeap, node.next)

    return resultHead
