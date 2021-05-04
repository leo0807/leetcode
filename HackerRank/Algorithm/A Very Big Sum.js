function aVeryBigSum(ar) {
    // Write your code here
    let res = BigInt(0);
    for (let i of ar) {
        res += BigInt(i);
    }
    return Number(res);
}