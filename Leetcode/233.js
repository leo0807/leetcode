/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    let num = n, i = 1, s = 0;
    while (num) {
        if (num % 10 === 0) {
            s = s + Math.floor(num / 10) * i;
        }
        if (num % 10 === 1) {
            s = s + Math.floor(num / 10) * i + (n % i) + 1;
        }
        if (num % 10 > 1) {
            s = s + Math.ceil(num / 10) * i;
        }
        num = Math.floor(num / 10);
        i = i * 10;
    }
    return s;
};