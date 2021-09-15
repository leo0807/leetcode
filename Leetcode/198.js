/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const len = nums.length;
    if (len === 0) { return 0; }
    let dp = new Array(len + 1);
    dp[0] = 0;
    dp[1] = nums[0];

    for (let i = 2; i <= len; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
    }
    return dp[len];
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob2 = function (nums) {
    const n = nums.length;
    if (n === 1) return nums[0];
    const dp = new Array(n).fill(0);
    dp[0] = nums[0], dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[n - 1];
};