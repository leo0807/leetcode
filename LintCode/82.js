export class Solution {

  /**
   * singleNumber
   *
   * @param A: An integer array
   * @return: An integer
   */
  singleNumber(A) {
    // write your code here
    return A.reduce((prev, curr) => prev ^ curr, 0);
  }

}