function multiply(array) {
    // write code here
    let len = array.length;
    let tmp = 1, tmpVal = 1;
    let res = [];
    for (let i = 0; i < len; i++) {
        tmp = array[i];
        array[i] = 1;
        tmpVal = 1;
        for (let i of array) {
            tmpVal *= i;
        }
        res.push(tmpVal);
        array[i] = tmp;
    }
    return res;
}
module.exports = {
    multiply: multiply
};