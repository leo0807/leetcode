//DP 背包
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    // 属于01背包问题，可以把问题抽象为“给定一个数组和一个容量为x的背包，求有多少种方式让背包装满（有多少种子集能让子集之和等于背包容量）?"
    // 递推公式：dp[i] = dp[i] + dp[i-num] ，对于当前的第i个物品，有拿和不拿两种情况，dp[i]表示不拿的情况，dp[i-num]表示拿的情况，因此要将两者相加。
    const sum = nums.reduce((prev, curr) => prev + curr);
    if (sum & 1) return false;
    const target = sum >> 1;
    const dp = new Array(target + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
            if (dp[j] === target) return true;
        }
    }
    return dp[target] === target;
};

// DFS ELT
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition2 = function (nums) {
    const sum = nums.reduce((prev, curr) => prev + curr);
    if (sum & 1) return false;
    const target = sum >> 1;
    return dfs(nums, 0, 0, target);
};

function dfs(nums, index, sum, target) {
    if (index === nums.length - 1) {
        if (sum === target) {
            return true;
        } else {
            return false;
        }
    }
    return dfs(nums, index + 1, sum + nums[index], target) ||
        dfs(nums, index + 1, sum, target);
}