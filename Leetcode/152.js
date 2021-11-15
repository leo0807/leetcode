/**
 * @param {number[]} nums
 * @return {number}
 */
// 连续乘数
// 因为序列中存在负数，乘法中又有负负得正的性质，所以要同时记录当前
// 序列可以得到的最大值和最小值，
// 有负数的最小值，尽可能的小，这样当再次遇到负数之后，结果可能变为最大
var maxProduct = function (nums) {
    const n = nums.length;
    let max = nums[0], min = nums[0], res = nums[0];
    for (let i = 1; i < n; i++) {
        let mx = max, mn = min;
        max = Math.max.call(null, mx * nums[i], nums[i], mn * nums[i]);
        min = Math.min.call(null, mn * nums[i], nums[i], mx * nums[i]);
        res = Math.max(max, res);
    }
    return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    const n = nums.length;
    const dp = [...Array(n)].map(() => new Array(2).fill(0));
    dp[0][0] = nums[0];
    dp[0][1] = nums[0];
    let res = nums[0];
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max.call(null, dp[i - 1][0] * nums[i], nums[i], dp[i - 1][1] * nums[i]);
        dp[i][1] = Math.min.call(null, dp[i - 1][0] * nums[i], nums[i], dp[i - 1][1] * nums[i]);
        res = Math.max(res, dp[i][0]);
    }
    // console.log(dp);
    return res;
};