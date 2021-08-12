/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let a = 0, b = 0, len = s.length;
    for (let i = 0; i < len; i++) {
        // @ts-ignore Invisible Transition
        if (s.charAt(i) == i % 2) {
            a++;
        } else {
            b++;
        }
    }
    return Math.min(a, b);
};