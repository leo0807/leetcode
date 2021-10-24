/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);
    let min = Infinity, prev = arr[0], res = [], n = arr.length;
    for (let i = 1; i < n; i++) {
        const diff = arr[i] - prev;
        if (diff < min) {
            res = [[prev, arr[i]]];
            min = diff;
        } else if (diff === min) {
            res.push([prev, arr[i]]);
        }
        prev = arr[i];
    }
    return res;
};