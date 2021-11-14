/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 贪心算法
 */
var canCompleteCircuit = function (gas, cost) {
  // 情况一：如果gas的总和小于cost总和，那么无论从哪里出发，一定是跑不了一圈的

  // 情况二：rest[i] = gas[i]-cost[i]为一天剩下的油，i从0开始计算累加到最后一站，如果累加没有出现负数，说明从0出发，油就没有断过，那么0就是起点。

  // 情况三：如果累加的最小值是负数，汽车就要从非0节点出发，从后向前，看哪个节点能这个负数填平，能把这个负数填平的节点就是出发节点。
  let curSum = 0, min = Infinity;
  for (let i = 0; i < gas.length; i++) {
    let rest = gas[i] - cost[i];
    curSum += rest;
    if (curSum < min) {
      min = curSum;
    }
  }
  // 情况一
  if (curSum < 0) return -1;
  // 情况二
  if (min >= 0) return 0;
  // 情况三
  for (let i = gas.length - 1; i >= 0; i--) {
    let rest = gas[i] - cost[i];
    min += rest;
    if (min >= 0) {
      return i;
    }
  }
  return -1;
};