from heapq import *


class FreqStack:
    def __init__(self):
        self.heap = []
        self.dict = collections.defaultdict(int)
        self.cnt = 0

    def push(self, x: int) -> None:
        # represents the order in which we push elements in the queue
        self.cnt += 1
        self.dict[x] += 1
        # push frequency, counter and element in the queue
        heapq.heappush(self.heap, [-self.dict[x], -self.cnt, x])

    def pop(self) -> int:
        largest = heapq.heappop(self.heap)
        self.dict[largest[2]] -= 1  # largest[2] == element
        return largest[2]

# Your FreqStack object will be instantiated and called as such:
# obj = FreqStack()
# obj.push(val)
# param_2 = obj.pop()
