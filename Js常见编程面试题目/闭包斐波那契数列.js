let fibonacci = function () {
    let temp = [0, 1];
    return function (n) {
        let result = temp[n];
        if (typeof result != 'number') {
            result = fibonacci(n - 1) + fibonacci(n - 2);
            temp[n] = result; // 将每次 fibonacci(n) 的值都缓存下来
        }
        return result;
    }
}();

console.log(fibonacci(6));