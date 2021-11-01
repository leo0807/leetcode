export class Solution {

    /**
     * findMin
     *
     * @param nums: the given array
     * @return: the minimum difference between their sums 
     */
    findMin(num) {
        const n = num.length;
        let sum = 0;
        for (let i = 0; i < n; i++) sum += num[i];

        const requiredSum = Math.floor(sum / 2);
        const dp = Array(n)
            .fill(false)
            .map(() => Array(requiredSum + 1).fill(false));

        // populate the sum=0 columns, as we can always form '0' sum with an empty set
        for (let i = 0; i < n; i++) dp[i][0] = true;

        // with only one number, we can form a subset only when the required sum is equal to that number
        for (let s = 1; s <= requiredSum; s++) {
            dp[0][s] = num[0] == s;
        }

        // process all subsets for all sums
        for (let i = 1; i < n; i++) {
            for (let s = 1; s <= requiredSum; s++) {
                // if we can get the sum 's' without the number at index 'i'
                if (dp[i - 1][s]) {
                    dp[i][s] = dp[i - 1][s];
                } else if (s >= num[i]) {
                    // else include the number and see if we can find a subset to get the remaining sum
                    dp[i][s] = dp[i - 1][s - num[i]];
                }
            }
        }

        let sum1 = 0;
        // Find the largest index in the last row which is true
        for (let i = requiredSum; i >= 0; i--) {
            if (dp[n - 1][i] === true) {
                sum1 = i;
                break;
            }
        }

        const sum2 = sum - sum1;
        return Math.abs(sum2 - sum1);
    }
}

// 先计算所有数的和，然后取一半halfsum。用boolean[] dp来检查array里面取一些数的和能否组成0～halfsum。
// 然后从后往前检查dp，遇到的第一个true所代表的i就是array里面取得的数能够组成的最接近总和一半的最大和。
// 最终两个set的差是sum - 2 * i
export class Solution {

    /**
     * findMin
     *
     * @param nums: the given array
     * @return: the minimum difference between their sums 
     */
    findMin(nums) {
        let sum1 = nums.reduce((prev, curr) => prev + curr)
        const sum = sum1 >> 1;
        const dp = Array(sum + 1).fill(false);
        dp[0] = true;
        for (const num of nums) {
            for (let i = sum; i >= 0; i--) {
                dp[i] |= dp[i - num];
            }
        }
        let s;
        for (s = dp.length - 1; s >= 0; s--) {
            if (dp[s]) break;
        }
        return sum1 - 2 * s;
    }
}