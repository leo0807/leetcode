/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    const arr = [];
    for (let i = left; i <= right; i++) {
        let num = i;
        while (num) {
            let temp = num % 10;
            if (temp === 0 || i % temp) break;
            else num = Math.floor(num / 10);
        }
        num === 0 && arr.push(i);
    }
    return arr;
};