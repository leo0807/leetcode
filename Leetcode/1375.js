/**
 * @param {number[]} light
 * @return {number}
 * 让所有开着的灯都变成蓝色的时刻的性质是：此时点亮最远的灯的位置恰巧等于点亮灯的个数。
 * 若点亮最远的灯的位置大于此时点亮灯的个数，则意味着在点亮最远的灯的位置之前存在着未点亮的灯。
 */
var numTimesAllBlue = function (light) {
  let max = -Infinity, count = 0;
  for (let i = 0; i < light.length; i++) {
    max = Math.max(max, light[i]);
    if (i + 1 === max) count++;
  }
  return count;
};