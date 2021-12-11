export class Solution {

  /**
   * findMissing
   *
   * @param nums: An array of integers
   * @return: An integer
   */
  findMissing(nums) {
    // write your code here
    let i = 0;
    const n = nums.length;
    while (i < n) {
      let j = nums[i];
      if (nums[i] < n && nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else {
        i += 1;
      }
    }
    console.log(nums);
    // find the first number missing from its index, that will be our required number
    for (i = 0; i < n; i++) {
      if (nums[i] !== i) {
        return i;
      }
    }

    return n;
  }

}