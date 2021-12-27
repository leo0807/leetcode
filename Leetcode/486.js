/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
    const n = nums.length, dp = Array.from(new Array(n), () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            dp[i][j] =
                Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }
    return dp[0][n - 1] >= 0;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
    const sum = nums.reduce((prev, curr) => prev + curr);
    const first = func(nums, 0, nums.length - 1);
    return first >= (sum - first);
};

function func(nums, i, j) {
    if (i === j) {
        return nums[i];
    }
    if (i + 1 === j) {
        return Math.max(nums[i], nums[j]);
    }
    return Math.max(
        nums[i] + Math.min(func(nums, i + 1, j - 1), func(nums, i + 2, j)),
        nums[j] + Math.min(func(nums, i + 1, j - 1), func(nums, i, j - 2))
    );
}