export class Solution {

    /**
     * backPack
     *
     * @param m: An integer m denotes the size of a backpack
     * @param A: Given n items with size A[i]
     * @return: The maximum size
     */
    backPack(m, A) {
        // write your code here
        const n = A.length;
        const dp = Array(m + 1).fill(0);
        // dp简化为1维数组，也可以为2维数组
        for (let i = 0; i < n; i++) {
            for (let j = m; j >= A[i]; j--) {
                dp[j] = Math.max(dp[j], dp[j - A[i]] + A[i]);
            }
        }
        return dp[m];
    }
}
