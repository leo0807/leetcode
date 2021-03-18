// @ts-nocheck
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    num1 = num1.split('').map(Number).reverse();
    num2 = num2.split('').map(Number).reverse();

    let start = 0, res = [], add = 0;
    while (start < num1.length || start < num2.length) {
        num1[start] = num1[start] ? num1[start] : 0;
        num2[start] = num2[start] ? num2[start] : 0;
        let tmp = num1[start] + num2[start] + add;
        add = tmp > 9 ? 1 : 0;
        tmp %= 10;
        res.push(tmp);
        start++;
    }

    add && res.push(1);
    return res.reverse().join("");
};