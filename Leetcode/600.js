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
// 将一个数转为二进制格式，从最高有效位（即从左到右）开始扫描。
// 如果我们发现右边每出现一次 1xxxx(1后有k个digit, 每个x表示0或1)样子的连续数字，满足不含有连续1的二进制数的总个数count 就需要增加f(k)，因为我们可以在这个数字上放一个'0'，后面放任意一个有效长度为k的字符串；之后，我们继续循环考虑剩下的情况，也就是说，我们在这个digit上放一个'1'。如果发现有连续的1，我们就退出循环并返回答案。在循环结束时，我们返回count + 1，包括数字n本身。

// 例如，如果n是10010110，接下来需要找到比n小的且没有连续1的数:

// 我们只把第1个有效位1换为0，这个1后面怎么放数字，都会比n小，其中最大的数是末尾7位都是“1”的数，这些数可以用范围 00000000 - 01111111表示，其中满足不含有连续1的二进制数的个数为 f(7)。
// 我们只把第2个有效位1换为0，这个1后面怎么放数字，都会比n小，其中最大的数是末尾4位都是“1”的数，这些数可以用范围 10000000 - 10001111表示，数的个数为 0000 - 1111，其中满足不含有连续1的二进制数的个数为f(4)。
// 我们只把第3个有效位1换为0，这个1后面怎么放数字，都会比n小，其中最大的数是末尾2位都是“1”的数，这些数可以用范围10010000 - 10010011表示，数的个数为 00~11，其中满足不含有连续1的二进制数的个数为f(2)。
// 我们只把第4个有效位1换为0，这个1后面怎么放数字，都会比n小，其中最大的数是末尾1位是“1”的数，些数可以用范围 10010100 - 10010101表示，数的个数为 0~1，其中满足不含有连续1的二进制数的个数为f(1)。

// 作者：yanglr
// 链接：https://leetcode-cn.com/problems/non-negative-integers-without-consecutive-ones/solution/leetcode-ac-dong-tai-gui-hua-jie-fa-han-eqceq/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。