/**
 * @param {number[][]} envelopes
 * @return {number}
 * DP
 */
var maxEnvelopes = function (envelopes) {
  const n = envelopes.length;
  envelopes.sort((a, b) => a[0] - b[0]);
  const dp = new Array(n).fill(1);
  let max = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i][0] > envelopes[j][0]
        && envelopes[i][1] > envelopes[j][1]
      ) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  let max = 0;
  const n = envelopes.length;
  const dp = new Array(n).fill(1);
  envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
  for (const envelope of envelopes) {
    let left = 0, right = max;
    while (left < right) {
      const mid = left + ((right - left) >> 1);
      if (dp[mid] < envelope[1]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    dp[left] = envelope[1];
    if (left === max) max++;
  }
  return max;
};