/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let max = 1, prev = s[0], count = 1;
    for (let i = 1; i < s.length; i++) {
        if (prev === s[i]) {
            count++;
            max = Math.max(max, count);
        }
        else count = 1;
        prev = s[i];
    }
    return max;
};

/**
 * @param {string} s
 * @return {number}
 */
var maxPower1 = function (s) {
    const length = s.length;
    let left = 0, right = 0, res = 0;
    while (left < length) {
        while (left < length && s.charAt(left) === s.charAt(right)) {
            right++;
        }
        res = Math.max(res, right - left);
        left = right;
    }
    return res;
};