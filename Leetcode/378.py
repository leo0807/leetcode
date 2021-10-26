class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        minHeap = []
        for row in matrix:
            for num in row:
                heapq.heappush(minHeap, num)
        for i in range(k - 1):
            heapq.heappop(minHeap)
        return heapq.heappop(minHeap)
