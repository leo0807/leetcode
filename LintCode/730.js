export class Solution {

    /**
     * subSum
     *
     * @param n: the given number
     * @return: Sum of elements in subsets
     */
    subSum(n) {
        let sum = 0;
        for (let i = 0; i <= n; i++) {
            sum += i;
        }
        return Math.pow(2, n - 1) * sum;
    }

}