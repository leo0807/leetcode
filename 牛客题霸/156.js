// 给定一个可能含有重复值的数组 arr，找到每一个 i 位置左边和右边离 i 位置最近且值比 arr[i] 小的位置。返回所有位置相应的信息。位置信息包括：两个数字 L 和 R，如果不存在，则值为 - 1，下标从 0 开始。
// 示例1
// 输入
// [3, 4, 1, 5, 6, 2, 7]
// 返回值
// [[-1, 2], [0, 2], [-1, -1], [2, 5], [3, 5], [2, -1], [5, -1]]

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param arr int一维数组 
 * @param k int 
 * @return int
 */

//  方法
function foundOnceNumber(arr, k) {
    // write code here
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) return arr[i];
    }
}

function foundOnceNumber2(arr, k) {
    // write code here
    //计算每一位上出现1的个数，%k得到出现一次的数
    let res = 0;
    for (let i = 0; i < 32; ++i) {
        let sum = 0;
        for (let num of arr) {
            //用无符号右移，防止正负号的影响
            //依次右移num，同1相与，计算每一位上1的个数
            sum += (num >> i) & 1
        }
        //对sum取余，左移恢复
        res ^= (sum % k) << i
    }
    return res
}