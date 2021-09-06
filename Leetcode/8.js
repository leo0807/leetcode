/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let res = s.trim().match(/^(\-|\+)?\d+/g);
    return res ? Math.max(Math.min(Number(res[0]), 2 ** 31 - 1), -(2 ** 31)) : 0
};

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let res = 0, index = 0, flag = 1, n = s.length;
    const max = (Math.pow(2, 31) - 1);
    const min = Math.pow(-2, 31);
    while (s[index] === ' ') index++;
    if (s[index] === '-') {
        index++;
        flag = -1;
    } else if (s[index] === '+') index++;
    while (index < n && s[index] != ' ' && !isNaN(s[index])) {
        let digit = Number(s[index]);
        // console.log(res);
        if (res > (max / 10) || (res === Math.floor(max / 10) && digit > 7)) {
            return flag === 1 ? max : min;
        }
        res = res * 10 + digit;
        index++;
    }
    return flag * res;
};