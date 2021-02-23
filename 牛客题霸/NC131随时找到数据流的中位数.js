/**
 * the medians
 * @param operations int整型二维数组 ops
 * @return double浮点型一维数组
 */
function flowmedian(operations) {
    // write code here
    const res = [];
    const arr = [];
    for (let i of operations) {
        if (i[0] === 1) {
            insert(arr, i[1]);
        } else {
            if (arr.length & 1) res.push(arr[(arr.length - 1) >> 1]);
            else {
                res.push((arr[arr.length >> 1] + arr[(arr.length >> 1) - 1]) / 2);
            }
        }
    }
    return res;
}
function insert(arr, num) {
    let left = 0,
        right = arr.length - 1;
    while (left <= right) {
        let center = (left + right) >> 1;
        if (arr[center] <= num) {
            left = center + 1;
        } else {
            right = center - 1;
        }
    }
    arr.splice(left, 0, num);
}
module.exports = {
    flowmedian: flowmedian
};