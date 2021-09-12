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