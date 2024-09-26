/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    const length = pairs.length;
    const dp = new Array(length).fill(1);
    let res = 1;
    pairs.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < length; i++) {
        for(let j = 0; j < i; j++) {
            if (pairs[i][0] > pairs[j][1] && 1 + dp[j] > dp[i]) {
                dp[i] = dp[j] + 1;
            }
        }
        res = Math.max(dp[i], res)
    }

    return res;
};
