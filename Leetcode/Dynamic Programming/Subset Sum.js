// Problem Statement#
// Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.

// Example 1:#
// Input: { 1, 2, 3, 7 }, S = 6
// Output: True
// The given set has a subset whose sum is '6': { 1, 2, 3 }
// Example 2:#
// Input: { 1, 2, 7, 1, 5 }, S = 10
// Output: True
// The given set has a subset whose sum is '10': { 1, 2, 7 }
// Example 3:#
// Input: { 1, 3, 4, 8 }, S = 6
// Output: False
// The given set does not have any subset whose sum is equal to '6'.

const canPartition = function (num, sum) {
    if (!num.length || sum < 1) return false;
    const n = num.length;
    const dp = Array(n + 1).fill(false)
        .map(() => Array(sum + 1).fill(false));

    for (let i = 0; i < n; i++) dp[i][0] = true;
    for (let s = 1; s <= sum; s++) dp[0][s] = num[0] === s;

    for (let i = 1; i < n; i++) {
        for (let s = 1; s <= sum; s++) {
            if (dp[i - 1][s]) {
                dp[i][s] = dp[i - 1][s];
            } else if (s >= num[i]) {
                dp[i][s] = dp[i - 1][s - num[i]];
            }
        }
    }
    return dp[n - 1][sum];
};
console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`);


const canPartition2 = function (num, sum) {
    const n = num.length;
    const dp = Array(sum + 1).fill(false);

    // handle sum=0, as we can always have '0' sum with an empty set
    dp[0] = true;

    // with only one number, we can have a subset only when the required sum is equal to its value
    for (let s = 1; s <= sum; s++) {
        dp[s] = num[0] == s;
    }

    // process all subsets for all sums
    for (let i = 1; i < n; i++) {
        for (let s = sum; s >= 0; s--) {
            // if dp[s]==true, this means we can get the sum 's' without num[i], hence we can move on to
            // the next number else we can include num[i] and see if we can find a subset to get the
            // remaining sum
            if (!dp[s] && s >= num[i]) {
                dp[s] = dp[s - num[i]];
            }
        }
    }

    return dp[sum];
};