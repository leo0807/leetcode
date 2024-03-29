class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        def mostK(k, nums):
            i = ans = 0
            win = defaultdict(lambda: 0)
            for j in range(len(nums)):
                if(win[nums[j]] == 0):
                    k -= 1
                win[nums[j]] += 1
                while k < 0:
                    win[nums[i]] -= 1
                    if(win[nums[i]] == 0):
                        k += 1
                    i += 1
                ans = max(ans, j - i + 1)
            return ans
        return mostK(2, fruits)
