/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    nums.sort((a, b) => a - b);
    const dp = Array(target + 1).fill(0);
    dp[0] = 1;
    //     不考虑nums[i]的情况下，填满容量为j - nums[i]的背包，有dp[j - nums[i]]种方法。

    //     那么只要搞到nums[i]的话，凑成dp[j]就有dp[j - nums[i]] 种方法。

    //     举一个例子, nums[i] = 2： dp[3]，填满背包容量为3的话，有dp[3]种方法。

    //     那么只需要搞到一个2（nums[i]），有dp[3]方法可以凑齐容量为3的背包，相应的就有多少种方法可以凑齐容量为5的背包。

    // 那么需要把 这些方法累加起来就可以了，dp[j] += dp[j - nums[i]]
    for (let j = 0; j <= target; j++) {
        for (const num of nums) {
            if (j >= num) {
                dp[j] += dp[j - num];
            }
        }
    }
    return dp[target];
};