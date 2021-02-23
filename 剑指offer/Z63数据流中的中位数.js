let arr = [];
function Insert(num) {
    // write code hereq
    arr.push(num);
    arr.sort();
}
function GetMedian() {
    // write code here
    const len = arr.length;
    if (len & 1) {
        return arr[(len - 1) / 2];
    } else {
        return (arr[len / 2] + arr[len / 2 - 1]) / 2;
    }
}