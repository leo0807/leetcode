from heapq import *


class Solution(object):
    def leastInterval(self, tasks, k):
        """
        :type tasks: List[str]
        :type n: int
        :rtype: int
        """
        freqMap = {}
        maxHeap = []
        intervals = 0
        for task in tasks:
            freqMap[task] = freqMap.get(task, 0) + 1
        for task, freq in freqMap.items():
            heappush(maxHeap, (-freq, task))

        while maxHeap:
            waitList = []
            n = k + 1
            while n > 0 and maxHeap:
                intervals += 1
                freq, char = heappop(maxHeap)
                if -freq > 1:
                    waitList.append((freq + 1, char))
                n -= 1

            for freq, char in waitList:
                heappush(maxHeap, (freq, char))
            # we'll be having 'n' idle intervals for the next iteration
            if maxHeap:
                intervals += n
        return intervals
