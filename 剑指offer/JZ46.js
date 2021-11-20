/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  num = num.toString();
  const n = num.length, dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    const tmp = num[i - 2] + num[i - 1];
    if (tmp >= '10' && tmp <= '25') {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1];
    }
  }
  // console.log(dp);
  return dp[n];
};


/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  if (num <= 9) return 1;
  const remainder = num % 100;
  //如果小于等于9或者大于等于26的时候，余数不能按照2位数字组合，比如56，只能拆分为5和6；反例25，可以拆分为2和5，也可以作为25一个整体进行翻译。
  if ((remainder <= 9) || (remainder >= 26)) return translateNum(Math.floor(num / 10));
  // remainder = [10, 25]时，既可以当做一个字母，也可以当做两个字母
  else {
    return translateNum(Math.floor(num / 10)) + translateNum(Math.floor(num / 100));
  }
};