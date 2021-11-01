export class Solution {

    /**
     * backPackII
     *
     * @param m: An integer m denotes the size of a backpack
     * @param A: Given n items with size A[i]
     * @param V: Given n items with value V[i]
     * @return: The maximum value
     */
    backPackII(m, A, V) {
        // write your code here
        const n = A.length;
        const dp = Array(n).fill(0).map(() => Array(m + 1).fill(0));
        // 第一个物品
        for (let i = 0; i <= m; i++) dp[0][i] = A[0] > i ? 0 : V[0];
        // 遍历物体
        for (let i = 1; i < n; i++) {
            // 遍历背包
            for (let j = 0; j <= m; j++) {
                // 当前物体体积大于当前背包体积，取上一个值
                if (A[i] > j) dp[i][j] = dp[i - 1][j];
                else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - A[i]] + V[i]);
            }
        }
        return dp[n - 1][m];
    }
    // 滚动数组解法
    backPackII2(m, A, V) {
        // write your code here
        const n = A.length;
        // 代表当前背包的体积
        const dp = new Array(m + 1).fill(0);
        for (let i = 0; i < n; i++) {
            // 正序遍历会有覆盖情况，导致信息缺失
            // 如, dp[1] = dp[1 - 1] 
            for (let j = m; j >= A[i]; j--) {
                dp[j] = Math.max(dp[j], dp[j - A[i]] + V[i]);
            }
        }
        return dp[m];
    }
    //  举一个例子：物品0的重量weight[0] = 1，价值value[0] = 15
    //  如果正序遍历
    //  dp[1] = dp[1 - weight[0]] + value[0] = 15
    //  dp[2] = dp[2 - weight[0]] + value[0] = 30
    //  此时dp[2]就已经是30了，意味着物品0，被放入了两次，所以不能正序遍历。
    //  为什么倒叙遍历，就可以保证物品只放入一次呢？
    //  倒叙就是先算dp[2]
    //  dp[2] = dp[2 - weight[0]] + value[0] = 15 （dp数组已经都初始化为0）
    //  dp[1] = dp[1 - weight[0]] + value[0] = 15
    //  所以从后往前循环，每次取得状态不会和之前取得状态重合，这样每种物品就只取一次了。


    //     那么问题又来了，为什么二维dp数组历的时候不用倒叙呢？
    //     因为对于二维dp，dp[i][j]都是通过上一层即dp[i - 1][j]计算而来，本层的dp[i][j]并不会被覆盖！
    //    （如何这里读不懂，大家就要动手试一试了，空想还是不靠谱的，实践出真知！）
    //     再来看看两个嵌套for循环的顺序，代码中是先遍历物品嵌套遍历背包容量，那可不可以先遍历背包容量嵌套遍历物品呢？
    //     不可以！
    //     因为一维dp的写法，背包容量一定是要倒序遍历（原因上面已经讲了），如果遍历背包容量放在上一层，那么每个dp[j]就只会放入一个物品，即：背包里只放入了一个物品。
}