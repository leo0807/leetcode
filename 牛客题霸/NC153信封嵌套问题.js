/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param letters int二维数组 
 * @return int
 */
function maxLetters(letters) {
    // write code here
    let len = letters.length
    if (!len) return 0
    letters.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
    const dp = new Array(len).fill(1)
    dp[0] = 1
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (letters[i][1] > letters[j][1] && letters[i][0] !== letters[j][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}
module.exports = {
    maxLetters: maxLetters
};