/**
 * @param {number} n
 * @return {number}
 */
// 暴力法 TLE
var findIntegers = function (n) {
    let res = 0;
    for (let i = 0; i <= n; i++) {
        if ((i & (i >> 1)) === 0) {
            res++;
        }
    }
    return res;
};
// 字典树 + 动态规划
var findIntegers2 = function (n) {
    let dpArr = new Array(31);
    let res = 0, pre = 0;
    for (let i = 29; i >= 0; i--) {
        dpArr[i] = dpArr[i - 1] + dpArr[i + 1];
    }
    for (let i = 29; i >= 0; i--) {
        // 在当前层创建字典树
        let val = 1 << i;
        if ((n & val) !== 0) {
            n -= val;
            res += dpArr[i + 1];

            if (pre === 1) {
                // 0,1 1为右子树
                // 上一层为 1，之后要处理的右子树根节点肯定也为 1
                // 此时连续两个 1，不满足题意，直接退出
                break;
            }
            pre = 1;
        } else {
            pre = 0;
        }
        if (i === 0) ++res;
    }
    return res;
}
//