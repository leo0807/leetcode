/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
    const res = [];
    let i = 0, j = 0;
    while (i < firstList.length && j < secondList.length) {
        const left = Math.max(firstList[i][0], secondList[j][0]);
        const right = Math.min(firstList[i][1], secondList[j][1]);
        left <= right && res.push([left, right]);
        if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    return res;
};