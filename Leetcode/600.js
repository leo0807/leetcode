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
// dp
/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function (n) {
    const dp = new Array(32).fill(0);
    dp[0] = 1, dp[1] = 2;
    for (let i = 2; i < 32; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    let res = 0;
    let preBit = 0; // 记录当前digit的前一个digit
    let k = 30;     // 指针k, 从二进制数的末位开始向前移动
    while (k >= 0) {
        if (n & (1 << k)) // 从低位向高位扫描, 判断第k位是否为1
        {
            res += dp[k];
            if (preBit) return res; // 出现了连续的1, 直接返回res
            preBit = 1; // 当前digit是1, 将preBit更新为当前digit 1, 为下一轮迭代做准备
        }
        else preBit = 0;
        --k;
    }
    return res + 1; // 算上 num 本身
};