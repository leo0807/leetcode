/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums == null || !nums.length) {
    return -1;
  }
  // 左闭右闭区间
  let begin = 0,
    end = nums.length - 1;
  while (begin <= end) {
    // 下面这样写是考虑大数情况下避免溢出
    let mid = begin + ((end - begin) >> 1);
    if (nums[mid] > target) {
      // 在左半区间中查找
      end = mid - 1;
    } else if (nums[mid] < target) {
      // 在右半区间中查找
      begin = mid + 1;
    } else {
      // 正好就是
      return mid;
    }
  }
  // 查找的是左边界，所以返回begin
  return begin;
};