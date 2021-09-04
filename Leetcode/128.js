var longestConsecutive = (nums) => {
    let map = new Map()
    let max = 0
    for (const num of nums) { // 遍历nums数组
        if (!map.has(num)) { // 重复的数字不考察，跳过
            let preLen = map.get(num - 1) || 0  // 获取左邻居所在序列的长度 
            let nextLen = map.get(num + 1) || 0 // 获取右邻居所在序列的长度 
            let curLen = preLen + 1 + nextLen   // 新序列的长度
            map.set(num, curLen) // 将自己存入 map
            max = Math.max(max, curLen) // 和 max 比较，试图刷新max
            map.set(num - preLen, curLen)  // 更新新序列的左端数字的value
            map.set(num + nextLen, curLen) // 更新新序列的右端数字的value
        }
    }
    return max
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive2 = function (nums) {
    const set = new Set(nums);
    let res = 0;
    for (const i of nums) {
        if (!set.has(i - 1)) {
            let tmpLen = 1, curNum = i;
            while (set.has(curNum + 1)) {
                curNum++;
                tmpLen++;
            }
            res = Math.max(tmpLen, res);
        }
    }
    return res;
};