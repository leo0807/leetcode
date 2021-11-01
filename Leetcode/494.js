/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
    * sum(P) - sum(N) = target 
     * => sum(nums) + sum(P) - sum(N) = target + sum(nums)
     * => 2 * sum(P) = target + sum(nums) 
     * => sum(P) = (target + sum(nums)) / 2
     *                   sum(P) - sum(N) = target
     * sum(P) + sum(N) + sum(P) - sum(N) = target + sum(P) + sum(N)
                       2 * sum(P) = target + sum(nums)
     * 原来的问题已转化为一个求子集的和问题： 找到nums的一个子集 P，使得sum(P) = (target + sum(nums)) / 2
     * 所以(target + sum) % 2为奇数则无解
*/
const findTargetSumWays = (nums, target) => {

    const sum = nums.reduce((a, b) => a + b);
    // 无法达成最大和目标，返回0
    if (target > sum) {
        return 0;
    }
    //  
    if ((target + sum) % 2) {
        return 0;
    }

    const halfSum = (target + sum) / 2;
    nums.sort((a, b) => a - b);
    // 转化为0/1背包问题，即装满halfSum，有多少种方法
    let dp = new Array(halfSum + 1).fill(0);
    // 装满0，只有一种方法
    dp[0] = 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = halfSum; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }

    return dp[halfSum];
};