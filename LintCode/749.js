export class Solution {

    /**
     * isBuild
     *
     * @param x: the wall's height
     * @return: YES or NO
     */
    isBuild(x) {
        // write you code here
        const dp = Array(x + 1).fill(false);
        const w = [3, 7];
        dp[0] = true
        for (let i = 1; i <= x; i++) {
            for (const num of w) {
                if (i >= num) {
                    dp[i] |= dp[i - num];
                }
            }
        }
        return dp[x] ? 'YES' : 'NO';
    }

}