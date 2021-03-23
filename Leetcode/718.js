/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
    let aLen = A.length,
        bLen = B.length;
    // [...Array(3)].map(x=>Array(5).fill(0))       
    let dp = [...Array(aLen + 1)].map(x => Array(bLen + 1).fill(0));
    let max = 0;
    for (let i = 1; i <= aLen; i++) {
        for (let j = 1; j <= bLen; j++) {
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max;
};