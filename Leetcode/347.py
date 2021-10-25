from heapq import *
def find_k_frequent_numbers(nums, k):
  topNumbers = []
  numsFrequencyMap = {}
  for num in nums:
    numsFrequencyMap[num] = numsFrequencyMap.get(num, 0) + 1
  minHeap = []

  for num, frequency in numsFrequencyMap.items():
    heappush(minHeap, (frequency, num))
    if len(minHeap) > k:
      heappop(minHeap)
  while minHeap:
    topNumbers.append(heappop(minHeap)[1])
  return topNumbers
