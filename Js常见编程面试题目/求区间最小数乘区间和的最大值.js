// 求区间最小数乘区间和的最大值
// [3, 1, 6, 4, 5, 2]
// 对于任意子序列可以计算一个X值，X = sum(subArray) * min(subArray)
// 求最大X
// X = (6 + 4 + 5) * 4 = 60


function getSubArr(arr) {
    let res = [];
    let max = 0, subArrSum = 0;

    while (arr.length) {
        let tmpMax = Math.max.call(null, ...arr);
        res.push(...arr.splice(arr.indexOf(tmpMax), 1));
        subArrSum += tmpMax;
        let tmpSum = subArrSum * res[res.length - 1];
        if (tmpSum < max) {
            return max;
        } else {
            max = tmpSum;
        }
    }
}