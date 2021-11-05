from heapq import *
from collections import deque


def rearrangeString(str, k):
    if k <= 1:
        return str
    charFrequencyMap = {}
    for char in str:
        charFrequencyMap[char] = charFrequencyMap.get(char, 0) + 1
    maxHeap = []
    # 把所有字母添加到maxHeap中
    for char, frequency in charFrequencyMap.items():
        heappush(maxHeap, (-frequency, char))
    queue = deque()
    resultString = []
    while maxHeap:
        frequency, char = heappop(maxHeap)
        # append the current character to the result string and decrement its count
        resultString.append(char)
        queue.append((char, frequency + 1))
        if len(queue) == k:
            char, frequency = queue.popleft()
            if -frequency > 0:
                heappush(maxHeap, (frequency, char))
    return ''.join(resultString) if len(resultString) == len(str) else ''
