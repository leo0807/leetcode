/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function (arr) {
  let index = -1, len = arr.length;
  for (let i = len - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      index = i - 1;
      break;
    }
  }
  if (index === -1) return arr;
  for (let i = len - 1; i > 0; i--) {
    if (arr[i] !== arr[i - 1] && arr[i] < arr[index]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      break;
    }
  }
  return arr;
};