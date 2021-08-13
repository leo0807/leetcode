var numTrees = function (n) {
    return factorial(n * 2) / (factorial(n + 1) * factorial(n));
};
function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}