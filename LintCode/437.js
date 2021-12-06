export class Solution {

  /**
   * copyBooks
   *
   * @param pages: an array of integers
   * @param k: An integer
   * @return: an integer
   */
  copyBooks(pages, k) {
    // write your code here
    if (pages.length === 0 || k < 1) return 0;
    // 下界为最大页面数，是为k足够大，每个人都能读一本书，所以最少时间是为最多页数的那本书
    let start = Math.max.apply(null, pages),
      // 上界为页面数目的总和，即若k为1，则所需要的时间为页面数目的总和
      end = pages.reduce((prev, curr) => prev + curr);
    while (start <= end) {
      const mid = start + ((end - start) >> 1);
      if (this.canComplete(pages, k, mid)) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    if (this.canComplete(pages, k, start)) {
      return start;
    }
    return end;
  }
  // 找到第一个 不多于K个人能在给定的完成时间里完成 复印len(pages)本书 这一任务的 完成时间
  canComplete(pages, k, nums) {
    let num = 1, pageSum = 0;
    for (const page of pages) {
      if (page + pageSum <= nums) {
        pageSum += page;
      } else {

        num++;
        pageSum = page;
      }
    }
    return num <= k;
  }
}



export class Solution {

  /**
   * copyBooks
   *
   * @param pages: an array of integers
   * @param k: An integer
   * @return: an integer
   */
  copyBooks(pages, k) {
    // write your code here
    const n = pages.length;
    if (n === 0 || k < 1) return 0;
    if (k > n) k = n;
    const f = [...Array(k + 1)].map(() => new Array(n + 1).fill(0));// K个copier，抄完n本书需要时间
    const prefixA = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) prefixA[i] = prefixA[i - 1] + pages[i - 1];
    // 0 个 copier，无穷大时间
    for (let i = 0; i <= n; i++) f[0][i] = Infinity;
    // 0 本书，不管几个copier耗时都是0
    for (let i = 0; i <= k; i++) f[i][0] = 0;
    //状态转移方程
    //f[k][i] = min (j=0...i) {max{f[k-1][j], A[j]+...+A[i-1]}}  

    for (let m = 1; m <= k; m++) {
      for (let i = 1; i <= n; i++) {
        f[m][i] = Infinity;
        for (let j = 0; j < i; j++) {
          // 枚举之前K-1个人抄了j本书的情况，和剩下的书所时间比较取其大，再刷新当前最小记录
          f[m][i] = Math.min(f[m][i], Math.max(f[m - 1][j], prefixA[i] - prefixA[j]));
        }
      }
    }
    return f[k][n];
  }

}