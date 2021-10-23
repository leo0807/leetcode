/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let count = new Array(26).fill(0);
    for (let i = 0; i < tasks.length; i++) {
        count[tasks[i].charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    count.sort((a, b) => a - b);
    let maxCount = 0;
    //     统计频率出现最高的字母有多少
    for (let i = 25; i >= 0; i--) {
        if (count[i] !== count[25]) {
            break;
        }
        maxCount++;
    }
    return Math.max((count[25] - 1) * (n + 1) + maxCount, tasks.length);
};