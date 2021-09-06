/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    for (const i of intervals) {
        if (!merged.length || merged[merged.length - 1][1] < i[0]) {
            merged.push(i);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], i[1]);
        }
    }
    return merged;
};