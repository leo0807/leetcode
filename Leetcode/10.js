var match = function (s, p) {
    if (p.length === 0) return s.length === 0;
    // 判断第一个字符相匹配的情况
    let first_match = (s.length !== 0) && (s[0] === p[0] || p[0] === '.');

    if (p.length >= 2 && p[1] === '*') {
        return match(s, p.substr(2)) || (first_match && match(s.substr(1), p));
    } else {
        return first_match && match(s.substr(1), p.substr(1));
    }
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    //防止该案例：""\n"c*"
    s = " " + s;
    p = " " + p;
    const m = s.length;
    const n = p.length;
    const dp = [...Array(m + 1)].map(() => new Array(n + 1).fill(false));
    dp[0][0] = true;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] == p[j - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                if (s[i - 1] !== p[j - 2] && p[j - 2] !== '.') {
                    dp[i][j] = dp[i][j - 2];
                } else {
                    // dp[i][j] = dp[i-1][j] // 多个字符匹配的情况	
                    // or dp[i][j] = dp[i][j-1] // 单个字符匹配的情况
                    // or dp[i][j] = dp[i][j-2] // 没有匹配的情况	
                    dp[i][j] = dp[i][j - 1] || dp[i][j - 2] ||
                        dp[i - 1][j];
                }
            }
        }
    }
    return dp[m][n];
};