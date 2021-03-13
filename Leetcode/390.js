/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
    let direction = true,
        length = n,
        step = 1,
        res = 1;
    while (length > 1) {
        if (direction || length % 2 === 1) {
            res += step
        }
        length = Math.floor(length / 2);
        step *= 2;
        direction = !direction;
    }
    return res;
};