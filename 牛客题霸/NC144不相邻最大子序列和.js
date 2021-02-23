/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 计算
 * @param n int整型 数组的长度
 * @param array int整型一维数组 长度为n的数组
 * @return long长整型
 */
function subsequence(n, array) {
    // write code here
    let dpi = 0,
        dp1 = 0,
        dp2 = 0;
    for (let i = 0; i < n; i++) {
        dpi = Math.max(dp1, dp2 + array[i]);
        dp2 = dp1;
        dp1 = dpi;
    }
    return dpi;
}
module.exports = {
    subsequence: subsequence
};