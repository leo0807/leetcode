export class Solution {

  /**
   * firstMissingPrime
   *
   * @param nums: an array of integer
   * @return: the first missing prime number
   */
  firstMissingPrime(nums) {
    if (nums.length == 0) {
      return 2;
    }

    if (nums[0] > 2) {
      return 2;
    }
    const n = nums.length;
    for (let i = 0; i < n; i++) {
      for (let j = nums[i] + 1; j < nums[i + 1]; j++) {
        if (this.isPrime(j)) return j;
      }
    }
    let num = nums[nums.length - 1] + 1;
    while (true) {
      if (this.isPrime(num)) {
        return num;
      }
      num++;
    }
  }
  isPrime(n) {
    if (n == 1) {
      return false;
    }
    for (let i = 2; n / i >= i; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
}
