/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let sum = 0;
    const map = new Map();
    for (const i of nums) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    for (const [k, v] of map.entries()) {
        sum += v === 1 ? k : 0;
    }
    return sum;
};