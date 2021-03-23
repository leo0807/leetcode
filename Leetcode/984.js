/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
    let res = [], writeA;
    while (a || b) {
        if (res.length >= 2 && (res[res.length - 1] === res[res.length - 2])) {
            writeA = res[res.length - 1] === 'b';
        } else {
            writeA = a >= b;
        }

        if (writeA) {
            a--;
            res.push('a');
        } else {
            b--;
            res.push('b');
        }
    }
    return res.join("");
};