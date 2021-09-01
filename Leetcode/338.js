/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = new Array(n+1).fill(0);
    for(let i = 1; i <= n; i++){
        // res[i] = res[i & (i - 1)] + 1;
        res[i] = res[i >> 1] + (i & 1); 
    }
    return res;
};