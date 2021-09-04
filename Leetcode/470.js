// 解释
// https://leetcode-cn.com/problems/implement-rand10-using-rand7/solution/xiang-xi-si-lu-ji-you-hua-si-lu-fen-xi-zhu-xing-ji/

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
    let num = (rand7() - 1) * 7 + rand7();
    while (num > 40) {
        num = (rand7() - 1) * 7 + rand7();
    }
    return num % 10 + 1;
};

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
    let num = (rand7() - 1) * 7 + rand7();
    if (num <= 40) return num % 10 + 1;
    num = (rand7() - 1) * 7 + rand7();
    while (num > 60) {
        num = (rand7() - 1) * 7 + rand7();
    }
    return num % 10 + 1;
};