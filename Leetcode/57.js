/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const merge = [];
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        merge.push(intervals[i++]);
    }
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    merge.push(newInterval);
    while (i < intervals.length) {
        merge.push(intervals[i++]);
    }
    return merge;
};