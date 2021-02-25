/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int 顶点数
 * @param m int 边数
 * @param graph int二维数组 一维3个数据，表示顶点到另外一个顶点的边长度是多少​
 * @return int
 */
function findShortestPath(n, m, graph) {
    // write code here
    let dp = new Array(n + 1).fill(Infinity);
    dp[1] = 0;
    //     n代表定点 n = 1 n->2 n->3
    for (let i = 2; i < n + 1; i++) {
        for (let j = 0; j < m; j++) {
            //             j 代表 graph index
            //             若i = 2，这次循环就是到顶点2的最短距离
            if (graph[j][1] === i && dp[graph[j][0]] !== -1) {
                dp[i] = Math.min(dp[i], graph[j][2] + dp[graph[j][0]]);
            }
        }
        dp[i] = dp[i] === Infinity ? -1 : dp[i];
    }
    return dp[n];
}
module.exports = {
    findShortestPath: findShortestPath
};