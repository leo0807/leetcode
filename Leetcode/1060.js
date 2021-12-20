// 给出一个有序数组 A，数组中的每个数字都是 独一无二的，找出从数组最左边开始的第 K 个缺失数字。
// 示例 1：

// 输入：A = [4, 7, 9, 10], K = 1
// 输出：5
// 解释：
// 第一个缺失数字为 5 。

// 示例 2：

// 输入：A = [4, 7, 9, 10], K = 3
// 输出：8
// 解释：
// 缺失数字有[5, 6, 8,…]，因此第三个缺失数字为 8 。

// 示例 3：

// 输入：A = [1, 2, 4], K = 3
// 输出：6
// 解释：
// 缺失数字有[3, 5, 6, 7,…]，因此第三个缺失数字为 6 。

// 1 <= A.length <= 50000
// 1 <= A[i] <= 1e7
// 1 <= K <= 1e8
// ————————————————
// 版权声明：本文为CSDN博主「wj振藩」的原创文章，遵循CC 4.0 BY - SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/qq_25652949/article/details/89512878

function missingElement(nums, k) {
  let len = nums.length, begin = nums[0], index = 0;
  while (true) {
    if (nums[index] != begin) {
      k--;
      if (k === 0) return begin;
      if (index === len) return begin + k;
    } else {
      index++;
    }
    begin++;
  }
}

const A = [4, 7, 9, 10], k = 1;
// const A = [4, 7, 9, 10], k = 3;
// const A = [1, 2, 4], k = 3;
console.log(missingElement(A, k));
console.log(missingElement([4, 7, 9, 10], 3));
console.log(missingElement([1, 2, 4], 3));


function missingElement2(nums, k) {
  let i = 1, n = 0, len = nums.length;
  let mark = nums[0];

  while (true) {
    if (n === k) {
      break;
    }
    if (mark + 1 <= nums[len - 1]) {
      if (mark + 1 < nums[i]) {
        mark++;
        n++;
      } else {
        mark++;
        i++;
      }
    } else {
      mark++;
      n++;
    }
  }
  return mark;
}