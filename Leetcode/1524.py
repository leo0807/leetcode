class Solution:
    def numOfSubarrays(self, arr: List[int]) -> int:
        sums = [0]
        odd = 0
        even = 0
        for i in range(len(arr)):
            sums.append(sums[-1] + arr[i])
            if sums[-1] % 2 == 0:
                even += 1
            else:
                odd += 1
        return int((odd + odd*even) % (1e9+7))

# https://leetcode-cn.com/problems/number-of-sub-arrays-with-odd-sum/solution/python-qian-zhui-he-qi-ou-by-brillant_o-/
