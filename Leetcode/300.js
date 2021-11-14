/**
 * @param {number[]} nums
 * @return {number}
 * dp[i]: 所有长度为i+1的递增子序列中, 最小的那个序列尾数.
 * 由定义知dp数组必然是一个递增数组, 可以用 maxL 来表示最长递增子序列的长度.
 * 1. num > dp[maxL], 表示num比所有已知递增序列的尾数都大, 
 * 将num添加入dp数组尾部, 并将最长递增序列长度maxL加1
 * 
 * 2. dp[i-1] < num <= dp[i], 只更新相应的dp[i]
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


/**
 * @param {number[]} nums
 * @return {number}
 * DP算法
 */
var lengthOfLIS = function (nums) {
    const n = nums.length;
    // 创建DP数组，因为最短长度为1，所以初始化为1
    const dp = new Array(n).fill(1);
    let res = 0;
    for (let i = 0; i < n; i++) {
        // 寻找比当前元素小的算有数量进行加1
        // 获得当前元素的最短长度
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        // 保存最长长度
        res = Math.max(res, dp[i]);
    }
    return res;
};