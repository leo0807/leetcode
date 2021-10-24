/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
    let left = 0, n = s.length, right = 0, res = 0;
    while (left < n) {
        if (s[left] !== s[right]) {
            left = right;
        } else {
            res = (res + right - left + 1) % 1000000007;
            right++;
        }
    }
    return res;
};