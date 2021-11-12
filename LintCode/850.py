class Solution:
    def employeeFreeTime(self, schedule):
        import heapq
        heap, result = [], []
        for employee in schedule:
            for i in range(0, len(employee), 2):
                heapq.heappush(heap, (employee[i], 0))
                heapq.heappush(heap, (employee[i + 1], 1))

        count, n = 0, len(heap)
        while n > 1:
            left = heapq.heappop(heap)
            right = heap[0]
            if (left[1] == 0):
                count += 1
            else:
                count -= 1
            if left[1] == 1 and right[1] == 0:
                if count == 0:
                    result.append(Interval(left[0], right[0]))
            n = len(heap)

        return result
