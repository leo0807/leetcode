/**
 * @param {string} s
 * @return {number}
 */
// 双指针法
var countSubstrings = function (s) {
    let res = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
        res += extend(s, i, i + 1);
        res += extend(s, i, i);
    }
    return res;
};

var extend = function (s, left, right) {
    let res = 0;
    const n = s.length;
    while (left >= 0 && right < n && s[left] === s[right]) {
        left--;
        right++;
        res++;
    }
    return res;
}

// 动态规划
// 情况1 ij下标相同，同一个字符例如‘a’，是回文子串
// 情况2 相差为1，如‘aa’，也是子串
// 情况3 下标：i 与 j相差大于1的时候，例如cabac，此时s[i]与s[j]已经相同了，
// 我们看i到j区间是不是回文子串就看aba是不是回文就可以了，
// 那么aba的区间就是 i + 1 与 j - 1区间，这个区间是不是回文就看dp[i + 1][j - 1]是否为true

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings2 = function (s) {
    const n = s.length;
    const dp = Array.from(new Array(n), () => new Array(n).fill(false));
    let res = 0;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if ((s[i] === s[j]) && ((j - i <= 1) || dp[i + 1][j - 1])) {
                res++;
                dp[i][j] = true;
            }
        }
    }
    return res;
};