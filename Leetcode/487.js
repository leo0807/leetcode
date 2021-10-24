/**
 * Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0.
 * Example 1:
 * Input: [1,0,1,1,0]
 * Output: 4
 * Explanation: Flip the first zero will get the the maximum number of consecutive 1s.
 * After flipping, the maximum number of consecutive 1s is 4.
 */

var findMaxConsecutiveOnes = function (nums) {
    let left = 0, n = nums.length, right = n - 1, max = 0, ones = 0;
    for (let right = left; right < n; right++) {
        if (nums[right] === 1) ones++;
        if (right - left + 1 - ones > 1) {
            if (nums[left] === 1) {
                ones--;
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
}
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0]));