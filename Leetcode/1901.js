/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
    let up = 0, down = mat.length - 1,
        left = 0, right = mat[0].length - 1;
    while (up <= down) {
        const mid = up + Math.floor((down - up) / 2);
        const upMax = Math.max.apply(null, mat[mid - 1] || [-1]);
        const downMax = Math.max.apply(null, mat[mid + 1] || [-1]);
        const rowMax = Math.max.apply(null, mat[mid]);
        if (rowMax >= upMax && rowMax >= downMax) {
            return [mid, mat[mid].indexOf(rowMax)];
        } else if (rowMax < upMax) {
            down = mid - 1;
        } else {
            up = mid + 1;
        }
    }

};