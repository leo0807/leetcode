import heapq


class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        maxHeap = []
        for num1 in range(min(len(nums1), k)):
            for num2 in range(min(len(nums2), k)):
                if len(maxHeap) < k:
                    heapq.heappush(
                        maxHeap, (-nums1[num1] - nums2[num2], num1, num2))
                else:
                    if -nums1[num1] - nums2[num2] < maxHeap[0][0]:
                        break
                    else:
                        heapq.heappop(maxHeap)
                        heapq.heappush(
                            maxHeap, (-nums1[num1] - nums2[num2], num1, num2))
        res = []
        for _, i, j in maxHeap:
            res.append([nums1[i], nums2[j]])
        return res
