/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const n = intervals.length;
    let res = 0, curEnd = intervals[0][1];
    for (let i = 1; i < n; i++) {
        if (intervals[i][0] < curEnd) {
            res++;
            curEnd = Math.min(curEnd, intervals[i][1]);
        } else {
            curEnd = intervals[i][1];
        }
    }
    return res;
};