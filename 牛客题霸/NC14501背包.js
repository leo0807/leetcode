/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 计算01背包问题的结果
 * @param V int整型 背包的体积
 * @param n int整型 物品的个数
 * @param vw int整型二维数组 第一维度为n,第二维度为2的二维数组,vw[i][0],vw[i][1]分别描述i+1个物品的vi,wi
 * @return int整型
 */
function knapsack(V, n, vw) {
    // write code here
    let dp = Array.from(new Array(n + 1), () => new Array(V + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= V; j++) {
            if (vw[i - 1][0] > j) {
                dp[i][j] = dp[i - 1][j]
            } else {
                let w1 = dp[i - 1][j];
                let w2 = dp[i - 1][j - vw[i - 1][0]] + vw[i - 1][1];
                dp[i][j] = Math.max(w1, w2);
            }
        }
    }
    return dp[n][V];
}
module.exports = {
    knapsack: knapsack
};