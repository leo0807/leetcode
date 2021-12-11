/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let n0 = n1 = n2 = 0;
  for (let i = 0, n = nums.length; i < n; i++) {
    if (nums[i] === 0) {
      nums[n2++] = 2
      nums[n1++] = 1
      nums[n0++] = 0;
    } else if (nums[i] === 1) {
      nums[n2++] = 2;
      nums[n1++] = 1;
    } else {
      nums[n2++] = 2;
    }
  }
  return nums;
};

var sortColors = function (nums) {
  let head = 0, n = nums.length, tail = n - 1;
  for (let i = 0; i < n;) {
    if (nums[i] === 0 && i > head) {
      swap(nums, i, head);
      head++;
    } else if (nums[i] === 2 && i < tail) {
      swap(nums, i, tail);
      tail--;
    } else i++;
  }
  return nums;
};

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}