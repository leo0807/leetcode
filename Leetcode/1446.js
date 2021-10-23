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