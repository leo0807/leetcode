// Top-Down DP

const solveKnapsack = function (profits, weights, capacity) {
    const dp = [];
    function knapsackRecursive(profits, weights, capacity, currentIndex) {
        if (capacity <= 0 || currentIndex >= profits.length) return 0;
        dp[currentIndex] = dp[currentIndex] || [];
        if (typeof dp[currentIndex][capacity] !== 'undefined') {
            return dp[currentIndex][capacity];
        }
        let profit1 = 0;
        // 选择拿当前item
        if (weights[currentIndex] <= capacity) {
            profit1 = profits[currentIndex] + knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1);
        }
        // 选择不拿当前item
        const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);
        dp[currentIndex][capacity] = Math.max(profit1, profit2);
        return dp[currentIndex][capacity];
    }
    return knapsackRecursive(profits, weights, capacity, 0);
}
var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);