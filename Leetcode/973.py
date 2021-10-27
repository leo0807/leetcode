from heapq import *


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        maxHeap = []
        for point in points:
            if len(maxHeap) < k:
                heappush(maxHeap, (-(point[0]*point[0] + point[1] * point[1]),
                                   point))
            else:
                heappush(maxHeap, (-(point[0]*point[0] + point[1] * point[1]),
                                   point))
                heappop(maxHeap)
        res = []
        for _, i in maxHeap:
            res.append(i)
        return res
