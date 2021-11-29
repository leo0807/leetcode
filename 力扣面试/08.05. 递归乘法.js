/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function (A, B) {
  if (B == 1) return A;
  return A + multiply(A, B - 1);
};
// class Solution {

//   public int multiply(int A, int B) {
//         int sum = 0;
//     while (A != 1) {
//       if ((A & 1) == 1) {
//         sum = sum + B;
//         A = A - 1;
//       } else {
//         B = B << 1;
//         A = A >> 1;
//       }
//     }
//     return B + sum;
//   }
// }

// 作者：feng - yu - yi - jiu - z
// 链接：https://leetcode-cn.com/problems/recursive-mulitply-lcci/solution/cheng-fa-bian-yi-wei-he-jia-fa-by-feng-y-pers/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。