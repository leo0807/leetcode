function VerifySquenceOfBST(sequence) {
    // write code here
    if (!sequence.length) return false;
    return findTree(sequence, 0, sequence.length - 1);
}
function findTree(arr, left, right) {
    if (left >= right) return true;
    let root = arr[right];
    let index;
    for (index = left; index < right; index++) {
        if (arr[index] > root) break;
    }
    for (let i = index; i < right; i++) {
        if (arr[i] < root) return false;
    }
    return findTree(arr, left, index - 1) && findTree(arr, index, right - 1);
}
module.exports = {
    VerifySquenceOfBST: VerifySquenceOfBST
};