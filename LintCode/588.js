// Bottom-up DP
export class Solution {

    /**
     * canPartition
     *
     * @param nums: a non-empty array only positive integers
     * @return: true if can partition or false
     */
    // 因为要找到相同的子集，所以和必定为偶数才能拆分，
    // 即只需要从当前集合中找到和为s一半的子集即可
    // dp[i][s]意味着能否从前i个数字上得到‘和’s，如dp[1][1]意味着能否从{1,2}中得到和1
    canPartition(nums) {
        // 问题转化为能否在集和中找到和为sum/2的子集
        // 其中一个维度为子集，另外一个维度为和
        const n = nums.length;
        let sum = nums.reduce((prev, curr) => prev + curr);
        if (sum & 1) return false;
        sum >>= 1;
        const dp = Array(n + 1).fill(false)
            .map(() => Array(sum + 1).fill(false));
        // populate the sum=0 columns, as we can always for '0' sum with an empty set
        for (let i = 0; i < n; i++) dp[i][0] = true;
        for (let s = 1; s <= sum; s++) dp[0][s] = dp[0][s] === nums[0];

        for (let i = 1; i < n; i++) {
            for (let s = 1; s <= sum; s++) {
                // 当sum小于nums[i]，无法携带当前数字，则查看上一个结果为true
                if (dp[i - 1][s]) {
                    dp[i][s] = dp[i - 1][s];
                    // 如果当前数字i小于s，则尝试携带这个数字，dp[i - 1][s - nums[i]]意味着能否找到之前的和，
                    // 如果能，则为true
                } else if (s >= nums[i]) {
                    dp[i][s] = dp[i - 1][s - nums[i]];
                }
            }
        }
        return dp[n - 1][sum];
    }

}


// Top-Down DP
let canPartition = function (num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) sum += num[i];

    // if 'sum' is a an odd number, we can't have two subsets with equal sum
    if (sum % 2 !== 0) return false;

    const dp = [];
    return canPartitionRecursive(dp, num, sum / 2, 0);
};

function canPartitionRecursive(dp, num, sum, currentIndex) {
    // base check
    if (sum === 0) return true;

    if (num.length === 0 || currentIndex >= num.length) return false;

    dp[currentIndex] = dp[currentIndex] || [];
    // if we have not already processed a similar problem
    if (typeof dp[currentIndex][sum] === 'undefined') {
        // recursive call after choosing the number at the currentIndex
        // if the number at currentIndex exceeds the sum, we shouldn't process this
        if (num[currentIndex] <= sum) {
            if (canPartitionRecursive(dp, num, sum - num[currentIndex], currentIndex + 1)) {
                dp[currentIndex][sum] = true;
                return true;
            }
        }

        // recursive call after excluding the number at the currentIndex
        dp[currentIndex][sum] = canPartitionRecursive(dp, num, sum, currentIndex + 1);
    }
    return dp[currentIndex][sum];
}

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4])}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 1, 3, 4, 7])}`);
console.log(`Can partitioning be done: ---> ${canPartition([2, 3, 4, 6])}`);