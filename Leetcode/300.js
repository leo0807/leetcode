/**
 * @param {number[]} nums
 * @return {number}
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