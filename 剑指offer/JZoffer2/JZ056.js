/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
    let tmp = 0;
    for (const i of nums) {
        // 任何数与0进行疑惑都会得到其本身
        tmp ^= i;
    }
    // 用1进行与运算，找到两者最近的一个不为0的最低位
    // 将以此为根据，把原数组中所有这一位为0对的分为一个组，所有为1的氛围另外一个组
    // let index = 0; index作为偏移量
    // while(tmp & 1 === 0){
    //     tmp >>= 1;
    //     index++;
    // }
    const flag = (-tmp) & tmp;
    let a = 0, b = 0;
    for (const i of nums) {
        // 此处括号因为优先级关系，不可省略
        if ((flag & i) === 0) {
            // 任何数与0进行疑惑都会得到其本身
            // 最终剩下的数字就是结果
            a ^= i;
        } else {
            b ^= i;
        }
    }
    return [a, b]
};