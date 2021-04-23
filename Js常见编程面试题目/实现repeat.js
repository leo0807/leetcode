function fill(n, v) {
    if (n == 1) return [v];
    else {
        return [v].concat(fill(n - 1, v));
    }
}
console.log(fill(3, "b"));
// 不可使用for map reduce