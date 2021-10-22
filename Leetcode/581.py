class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        new_list = [a == b for a, b in zip (sorted(nums),nums)]
        if all(new_list):
            return 0
        else:
            return len(nums) - new_list.index(False) - new_list[::-1].index(False)
        