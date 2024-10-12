/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    const len = mountain.length, res = [];
    if (len === 0) return res;
    
    for (let i = 1; i < len - 1; i++) {
        if(mountain[i - 1] < mountain[i] && mountain[i] > mountain[i + 1]) {
            res.push(i);
        }
    }
    return res;
};
