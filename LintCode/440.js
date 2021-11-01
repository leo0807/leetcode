export class Solution {

    /**
     * backPackIII
     *
     * @param A: an integer array
     * @param V: an integer array
     * @param m: An integer
     * @return: an array
     */
    backPackIII(A, V, m) {
        const n = A.length;
        // 代表当前背包的体积
        const dp = new Array(m + 1).fill(0);
        for (let i = 0; i < n; i++) {
            // 正序遍历，携带重复选择，符合题意
            for (let j = A[i]; j <= m; j++) {
                dp[j] = Math.max(dp[j], dp[j - A[i]] + V[i]);
            }
        }
        return dp[m];
    }

}