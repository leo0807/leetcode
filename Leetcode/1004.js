/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let n = nums.length, max = 0, left = 0, map = {};
    map[0] = 0;
    map[1] = 0;
    for (let right = left; right < n; right++) {
        map[nums[right]]++;
        while (right - left + 1 - map[1] > k) {
            map[nums[left]]--;
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
};