/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function (A, B) {
    let m = A.length, n = B.length;
    let dp = [...Array(m + 1)].map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = A[i - 1] === B[j - 1] ? (1 + dp[i - 1][j - 1]) :
                Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    console.log(dp);
    return dp[m][n];
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 此题目等同于1143，不相交的线
 * 本题说是求绘制的最大连线数，其实就是求两个字符串的最长公共子序列的长度！
 */
var maxUncrossedLines = function (nums1, nums2) {
    const n = nums1.length, m = nums2.length;
    const dp = [...Array(n + 1)].map(() => new Array(m + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max.call(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[n][m];
};