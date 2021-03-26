/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    s = s.split('');
    let stack = [], num = 0, res = "";
    for (let i of s) {
        if (!isNaN(i)) {
            num = num * 10 + Number(i);
        } else if (i === '[') {
            stack.push([res, num]);
            res = "";
            num = 0;
        } else if (i === ']') {
            let tmp = stack.pop();
            res = tmp[0] + res.repeat(tmp[1]);
        } else {
            res += i;
        }
    }
    return res;
};