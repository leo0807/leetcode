let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// 从右上到左下
function matrixReverse(arr) {
    const row = arr.length,
        col = arr[0].length;
    const res = [];
    for (let i = col - 1; i >= 0; i--) {
        let tmpRow = 0, tmpCol = i;
        while (tmpCol >= 0 && tmpCol < col && tmpRow >= 0 && tmpRow < row) {
            res.push(arr[tmpRow][tmpCol]);
            tmpRow++;
            tmpCol++;
        }
    }
    for (let i = 1; i < row; i++) {
        let tmpRow = i, tmpCol = 0;
        while (tmpCol >= 0 && tmpCol < col && tmpRow >= 0 && tmpRow < row) {
            res.push(arr[tmpRow][tmpCol]);
            tmpRow++;
            tmpCol++;
        }
    }
    return res;
}
// 从左下到右上

function matrixReverse2(arr) {

}