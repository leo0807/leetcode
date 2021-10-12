/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
    * sum(P) - sum(N) = target 
     * => sum(nums) + sum(P) - sum(N) = target + sum(nums)
     * => 2 * sum(P) = target + sum(nums) 
     * => sum(P) = (target + sum(nums)) / 2
*/
const findTargetSumWays = (nums, target) => {

    const sum = nums.reduce((a, b) => a + b);

    if (target > sum) {
        return 0;
    }

    if ((target + sum) % 2) {
        return 0;
    }

    const halfSum = (target + sum) / 2;
    nums.sort((a, b) => a - b);

    let dp = new Array(halfSum + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = halfSum; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }

    return dp[halfSum];
};