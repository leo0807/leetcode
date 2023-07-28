// 双指针
class Solution {
    public int maximumUniqueSubarray(int[] nums) {
        int maxScore = 0, currScore = 0;
        HashSet<Integer> hashSet = new HashSet<Integer>();
        for(int left = 0, right = 0; right < nums.length; right++){
            while(!hashSet.add(nums[right])){
                currScore -= nums[left];
                hashSet.remove(nums[left++]);
            }
            currScore += nums[right];
            maxScore = Math.max(maxScore, currScore);
        }
        return maxScore;
    }
}

class Solution {
    public int maximumUniqueSubarray(int[] nums) {
        int maxScore = 0;
        int length = nums.length;
        int[] prefixSum = new int[length + 1];
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for(int left = 0, right = 0; right < length; right++){
            prefixSum[right + 1] = prefixSum[right] + nums[right];
            if (map.containsKey(nums[right])){
                left = Math.max(left, map.get(nums[right]) + 1);
            }
            maxScore = Math.max(maxScore, prefixSum[right + 1] - prefixSum[left]);
            map.put(nums[right], right);
        }
        return maxScore;
    }
}