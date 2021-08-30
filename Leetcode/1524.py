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

作者：brillant_o-
链接：https://leetcode-cn.com/problems/number-of-sub-arrays-with-odd-sum/solution/python-qian-zhui-he-qi-ou-by-brillant_o-/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。