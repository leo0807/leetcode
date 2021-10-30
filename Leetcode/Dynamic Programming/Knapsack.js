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


// Bottom-up
const solveKnapsack2 = function (profits, weights, capacity) {
    const n = profits.length;
    if (capacity <= 0 || n == 0 || weights.length !== n) return 0;
    const dp = Array(profits.length).fill(0)
        .map(() => Array(capacity + 1).fill(0));
    // 容量capacity为0的时候，profit肯定为0
    for (let i = 0; i < n; i++) dp[i][0] = 0;
    // 当容量为1，且物品的容量不超过1的时候， 则直接取走
    for (let i = 0; i <= capacity; i++) {
        if (weights[0] <= i) dp[0][i] = profits[0];
    }
    // 处理剩余的子序列
    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= capacity; j++) {
            let profit1 = 0,
                profit2 = 0;
            // 拿当前item
            if (weights[i] <= j) profit1 = profits[i] + dp[i - 1][j - weights[i]];
            // 不拿当前item
            profit2 = dp[i - 1][j];
            dp[i][j] = Math.max(profit1, profit2);
        }
    }
    return dp[n - 1][capacity];
}
var profits2 = [1, 6, 10, 16];
var weights2 = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack2(profits2, weights2, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack2(profits2, weights2, 6)}`);

// 空间复杂度降低到 O(capacity)
// we use `i%2` instead if `i` and `(i-1)%2` instead if `i-1`
let solveKnapsack = function (profits, weights, capacity) {
    const dp = Array(2)
        .fill(0)
        .map(() => Array(capacity + 1).fill(0));

    // if we have only one weight, we will take it if it is not more than the capacity
    for (let c = 0; c <= capacity; c++) {
        if (weights[0] <= c) dp[0][c] = dp[1][c] = profits[0];
    }

    // process all sub-arrays for all the capacities
    for (let i = 1; i < n; i++) {
        for (let c = 1; c <= capacity; c++) {
            let profit1 = 0,
                profit2 = 0;
            // include the item, if it is not more than the capacity
            if (weights[i] <= c) profit1 = profits[i] + dp[(i - 1) % 2][c - weights[i]];
            // exclude the item
            profit2 = dp[(i - 1) % 2][c];
            // take maximum
            dp[i % 2][c] = Math.max(profit1, profit2);
        }
    }

    // maximum profit will be at the bottom-right corner.
    return dp[(n - 1) % 2][capacity];
};

let solveKnapsack = function (profits, weights, capacity) {
    const n = profits.length;
    if (capacity <= 0 || n == 0 || weights.length != n) return 0;

    const dp = Array(capacity + 1).fill(0);

    // if we have only one weight, we will take it if it is not more than the capacity
    for (let c = 0; c <= capacity; c++) {
        if (weights[0] <= c) dp[c] = profits[0];
    }

    // process all sub-arrays for all the capacities
    for (let i = 1; i < n; i++) {
        for (let c = capacity; c >= 0; c--) {
            let profit1 = 0,
                profit2 = 0;
            // include the item, if it is not more than the capacity
            if (weights[i] <= c) profit1 = profits[i] + dp[c - weights[i]];
            // exclude the item
            profit2 = dp[c];
            // take maximum
            dp[c] = Math.max(profit1, profit2);
        }
    }

    // maximum profit will be at the bottom-right corner.
    return dp[capacity];
};