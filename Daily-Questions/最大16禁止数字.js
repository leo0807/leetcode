// 代码题。给定一个包含大写英文字母和数字的句子，
// 找出这个句子所包含的最大的十六进制整数，返回这个整数的值。
// 数据保证该整数在int表示范围内。例如："012345BZ16" ，
// 最大数“12345B”对应十进制为1193051。

function solve(s) {
    // write code here
    // 记录最大的字符串
    let maxstr = ''
    // 记录最大的值
    let maxnum = 0
    // 全局匹配符合要求的字符串
    let arr = s.match(/[0-9A-F]+/g)
    // 记录当前执行的字符串的长度
    let templen = 0
    for (let i = 0; i < arr.length; i++) {
        // 这个if是用来过滤比之前运行过的字符串更短的字符串
        // 短的字符串肯定比之前的数字小
        // 当然还可以直接比较字符串的大小，然后再进行运算
        if (arr[i].length >= templen) {
            templen = arr[i].length
            let temp = parseInt(arr[i], 16)
            if (temp > maxnum) {
                maxstr = arr[i]
                maxnum = temp
            }
        }
    }
    return maxnum
}