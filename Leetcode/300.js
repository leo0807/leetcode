/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let max = 0;
    let dp = new Array(nums.length);
    for (let i of nums) {
        let left = 0, right = max;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (dp[mid] < i) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        dp[left] = i;
        left === max && max++;
    }
    return max;
};