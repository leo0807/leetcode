from heapq import *


class Solution:
    def reorganizeString(self, s: str) -> str:
        res = []
        freqMap = {}
        for char in s:
            freqMap[char] = freqMap.get(char, 0) + 1
        maxHeap = []
        for char, freq in freqMap.items():
            heappush(maxHeap, (-freq, char))

        prevChar = ''
        prevFreq = 0
        while maxHeap:
            freq, char = heappop(maxHeap)
            # 保证每隔一个位置都可以有不同的字符
            # 如果最后有两个以上相同的字符则会把该字符pop
            # 导致字符串长度与原始长度不匹配
            if prevChar and -prevFreq > 0:
                heappush(maxHeap, (prevFreq, prevChar))
            res.append(char)
            prevChar = char
            prevFreq = freq + 1
        return ''.join(res) if len(res) == len(s) else ''

    def reorganizeString2(self, S: str) -> str:
        cnt = Counter(S)
        heap = [(-v, k) for k, v in cnt.items()]
        heapq.heapify(heap)
        ans = []
        while(len(heap) > 1):
            x = heapq.heappop(heap)
            y = heapq.heappop(heap)
            ans.extend([x[1], y[1]])
            if x[0] < -1:
                heapq.heappush(heap, (x[0]+1, x[1]))
            if y[0] < -1:
                heapq.heappush(heap, (y[0]+1, y[1]))
        if heap:
            if heap[0][0] < -1:
                return ""  # case where last left element count is more than 2
            ans.append(heap[0][1])
        return "".join(ans)
