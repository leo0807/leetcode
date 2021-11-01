/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    // 从dp[i]的含义上来讲就是，凑成总金额0的货币组合数为1
    // 下标非0的dp[j]初始化为0，这样累计加dp[j - coins[i]]的时候才不会影响真正的dp[j]
    dp[0] = 1;
    // 此种顺序为组合数
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    // 遍历顺序不同， 此种顺序为排列数
    // for (int j = 0; j <= amount; j++) { // 遍历背包容量
    //     for (int i = 0; i < coins.size(); i++) { // 遍历物品
    //         if (j - coins[i] >= 0) dp[j] += dp[j - coins[i]];
    //     }
    // }

    return dp[amount];
};