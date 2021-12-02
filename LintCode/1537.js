export class Solution {

  /**
   * SwapZeroOne
   *
   * @param nums: an Integer array
   * @return: return the minimum number of swaps.
   */
  SwapZeroOne(nums) {
    // Write your code here
    let left = 0, right = nums.length - 1, count = 0;
    while (left < right) {
      if (nums[left] > nums[right]) {
        count += right - left;
        left++;
        right--;
      }
      if (nums[left] === 0) {
        left++;
      }
      if (nums[right] === 1) {
        right--;
      }
    }
    return count;
  }

}