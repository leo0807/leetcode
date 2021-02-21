function FindContinuousSequence(sum) {
    // write code here
    let left = 1,
        right = 1,
        temp = 0,
        res = [];
    while (left <= sum / 2) {
        if (temp < sum) {
            temp += right;
            ++right;
        } else if (temp > sum) {
            temp -= left;
            ++left;
        } else {
            let arr = [];
            for (let i = left; i < right; i++) {
                arr.push(i);
            }
            res.push(arr);
            temp -= left;
            left++;
        }
    }
    return res;
}
module.exports = {
    FindContinuousSequence: FindContinuousSequence
};