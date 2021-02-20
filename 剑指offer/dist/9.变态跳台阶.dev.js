"use strict";

// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
// 示例1
// 输入
// 3
// 返回值
// 4
function jumpFloorII(number) {
  // write code here
  //     因为n级台阶，第一步有n种跳法：跳1级、跳2级、到跳n级
  //     跳1级，剩下n-1级，则剩下跳法是f(n-1)
  //     跳2级，剩下n-2级，则剩下跳法是f(n-2)
  //     所以f(n)=f(n-1)+f(n-2)+...+f(1)
  //     因为f(n-1)=f(n-2)+f(n-3)+...+f(1 [2^(n-1)] 种跳法)
  //     所以f(n)=2*f(n-1) 即 [2^(n-1)] 种跳法
  if (number === 0) return 0;
  return Math.pow(2, number - 1);
}