/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let res = "";
    for (const i of s) {
        res += i.charCodeAt(0) - 96;
    }
    for (let i = 0; i < k && res.length > 1; i++) {
        res = res.split("").map(Number).reduce((prev, curr) => prev + curr).toString();
    }
    return Number(res);
};