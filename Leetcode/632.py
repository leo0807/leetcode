from heapq import *


class Solution:
    def smallestRange(self, lists: List[List[int]]) -> List[int]:
        minHeap = []
        rangeStart, rangeEnd = 0, math.inf
        currentMaxNumber = -math.inf

        # put the 1st element of each array in the max heap
        for arr in lists:
            heappush(minHeap, (arr[0], 0, arr))
            currentMaxNumber = max(currentMaxNumber, arr[0])

          # take the smallest(top) element form the min heap, if it gives us smaller range, update the ranges
          # if the array of the top element has more elements, insert the next element in the heap
        while len(minHeap) == len(lists):
            num, i, arr = heappop(minHeap)
            if rangeEnd - rangeStart > currentMaxNumber - num:
                rangeStart = num
                rangeEnd = currentMaxNumber
            if len(arr) > i+1:
                heappush(minHeap, (arr[i+1], i+1, arr))
                currentMaxNumber = max(currentMaxNumber, arr[i+1])

        return [rangeStart, rangeEnd]
