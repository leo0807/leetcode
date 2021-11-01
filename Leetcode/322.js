/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3
// 解释: 11 = 5 + 5 + 1
// 题目求的值为 f(11)，第一次选择硬币时我们有三种选择。
// 假设我们取面额为 1 的硬币，那么接下来需要凑齐的总金额变为 11 - 1 = 10，即 f(11) = f(10) + 1，这里的 + 1 就是我们取出的面额为 1 的硬币。
// 同理，如果取面额为 2 或面额为 5 的硬币可以得到：
// f(11) = f(9) + 1
// f(11) = f(6) + 1
// 所以：
// f(11) = min(f(10), f(9), f(6)) + 1
var coinChange = function (coins, amount) {
    const n = coins.length;
    // 凑足总额为j所需钱币的最少个数为dp[j]
    const dp = Array(n + 1).fill(0);

    for (let i = 1; i <= amount; i++) {
        let cost = Infinity;
        for (const c of coins) {
            if (i - c >= 0) {
                cost = Math.min(cost, dp[i - c] + 1);
            }
        }
        dp[i] = cost;
    }
    if (dp[amount] === Infinity) return -1;
    else return dp[amount];
};


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const n = coins.length;
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    // 遍历背包
    for (let i = 1; i <= amount; i++) {
        // 遍历物品
        for (const c of coins) {
            if (i - c >= 0 && dp[i - c] !== Infinity) {
                dp[i] = Math.min(dp[i], dp[i - c] + 1);
            }
        }
    }
    if (dp[amount] === Infinity) return -1;
    else return dp[amount];
};