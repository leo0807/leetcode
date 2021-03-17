/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let res = strs[0];
    for (let i = 1, len = strs.length; i < strs.length; i++) {
        while (strs[i].indexOf(res) !== 0) {
            res = res.substring(0, res.length - 1);
        }
    }
    return res;
};


