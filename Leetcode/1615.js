/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
    let scores = new Array(n).fill(0), connecedMap = Array.from(new Array(n), () => new Array(n).fill(false)), res = 0;
    for (const i of roads) {
        scores[i[0]]++;
        scores[i[1]]++;
        connecedMap[i[0]][i[1]] = true;
        connecedMap[i[1]][i[0]] = true;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 一个城市 排除
            if (i === j) continue;
            // tmp 为链接两个城市的道路和
            let tmp = scores[i] + scores[j];
            // -1 是因为此时两者互相连接了
            if (connecedMap[i][j] === true) tmp--;
            res = Math.max(res, tmp);
        }
    }
    return res;
};