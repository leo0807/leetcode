/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
    if (n === 1) return 1;
    let ans = -1;
    const f = Array.from(new Array(n + 1), () => new Array(k + 1).fill(0));
    for (let i = 1; i <= k; i++) {
        f[1][i] = 1;
    }
    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j <= k; ++j) {
            f[i][j] = 1 + f[i - 1][j - 1] + f[i - 1][j];
        }
        if (f[i][k] >= n) {
            ans = i;
            break;
        }
    }
    return ans;
};