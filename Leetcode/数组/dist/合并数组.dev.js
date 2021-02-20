"use strict";

function merge(intervals) {
  // write code here
  if (intervals.length < 2) return intervals;
  intervals.sort(function (a, b) {
    return a.start - b.start;
  });
  var res = [],
      pre = intervals[0];

  for (var i = 1, len = intervals.length; i < len; i++) {
    if (intervals[i].start <= pre.end) {
      pre.end = Math.max(pre.end, intervals[i].end);
    } else {
      res.push(pre);
      pre = intervals[i];
    }
  }

  res.push(pre);
  return res;
}