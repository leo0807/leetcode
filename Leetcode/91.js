var numDecodings = function (s) {
    if (s === "0" || !s.length) return 0;
    return decode(s, s.length - 1);
};

function decode(s, index) {
    if (index <= 0) return 1;

    let count = 0,
        curr = s[index],
        prev = s[index - 1];

    if (curr > '0') {
        count = decode(s, index - 1);
    }

    if (prev === '1' || (prev == '2' && curr <= '6')) {
        count += decode(s, index - 2);
    }
    return count;
}


/**
 * @param {string} s
 * @return {number}
 * DP
 */
var numDecodings2 = function (s) {
    const n = s.length, dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }
        if (i > 1 && s[i - 2] !== '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[n];
};

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings3 = function (s) {
    const n = s.length;
    // a = f[i-2], b = f[i-1], c = f[i]
    let a = 0, b = 1, c = 0;
    for (let i = 1; i <= n; i++) {
        c = 0;
        if (s[i - 1] !== '0') {
            c += b;
        }
        if (i > 1 && s[i - 2] !== '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
            c += a;
        }
        a = b;
        b = c;
    }
    return c;
};
