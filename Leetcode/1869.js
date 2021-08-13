
/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
    let oneLen = 0, zeroLen = 0,
        one = 0, zero = 0;
    for (const i of s) {
        if (i === "0") {
            zero++;
            one = 0;
        } else {
            one++;
            zero = 0;
        }
        zeroLen = Math.max(zero, zeroLen);
        oneLen = Math.max(one, oneLen);
    }
    oneLen = oneLen > zeroLen ? true : false;
    return oneLen;
};