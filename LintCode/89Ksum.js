export class Solution {

    /**
     * kSum
     *
     * @param A: An integer array
     * @param k: A positive integer (k <= length(A))
     * @param target: An integer
     * @return: An integer
     */
    kSum(A, k, target) {
        // write your code here
        const len = A.length;
        const dp = new Array(len + 1).fill(null).map(item => (new Array(k + 1).fill(target + 1)).map(item => Array(target + 1).fill(null)))
        for (let i = 0; i <= len; i++) dp[i][0][0] = 1;

        for (let i = 1; i <= len; i++) {
            for (let j = 1; j <= k && j <= i; j++) {
                for (let t = 1; t <= target; t++) {
                    dp[i][j][t] = 0;
                    if (t >= A[i - 1]) {
                        dp[i][j][t] = dp[i - 1][j - 1][t - A[i - 1]];
                    }
                    dp[i][j][t] += dp[i - 1][j][t];
                }
            }
        }
        return dp[len][k][target];
    }
}