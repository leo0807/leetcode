// 需要实现的函数
function repect(func, times, wait) {
    return function (...args) {
        let count = 0;
        let interval = setInterval(function () {
            count++;
            func.apply(this, args);
            count === times && clearInterval(interval);
        }, wait)
    }
}
// 方法2
function repect2(func, times, wait) {
    return async function (...args) {
        for (let i = 0; i < times; i++) {
            await new Promise(function (resolve) {
                setTimeout(() => {
                    func.apply(this, args);
                    resolve();
                }, wait);
            })
        }
    }
}
// 方法3
function repect3(func, times, wait) {
    let flag = 0;
    return function f(...args) {
        var interval = setTimeout(function () {
            flag++;
            func.apply(null, args);
            // console.log(this);
            if (flag === times) {
                clearTimeout(interval);
            } else {
                f(...args);
            }
        }, wait);
    }
}
// 使下面代码能正常工作
const repectFunc = repect(console.log, 4, 3000)

repectFunc('helloworld') //会输出 4 次 hellworld，每次间隔 3 秒