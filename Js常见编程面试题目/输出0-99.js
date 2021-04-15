// 1、只能修改 setTimeout 到 Math.floor(Math.random() * 1000 的代码
// 2、不能修改 Math.floor(Math.random() * 1000
// 3、不能使用全局变量

function print(n) {
    setTimeout(() => {
        console.log(n);
    }, Math.floor(Math.random() * 1000));
}
for (var i = 0; i < 100; i++) {
    print(i);
}

// 解法
// 1. 给SetTimeout添加第三个参数，setTimeout第二个参数为延迟时间
// 第二个之后的参数为Additional parameters to pass to the function 
function print1(n) {
    setTimeout(() => {
        console.log(n);
    }, 1, Math.floor(Math.random() * 1000));
}

// 2. var的块级作用域，从99开始减
function print2(n) {
    setTimeout(() => {
        console.log(i--);
    }, Math.floor(Math.random() * 1000));
}

// 3.
function print3(n) {
    setTimeout((() => {
        console.log(n)
        return () => { }
    }).call(n, []), Math.floor(Math.random() * 1000));
}
for (var i = 0; i < 100; i++) {
    print(i);
}

//4.
function print4(n) {

    setTimeout(() => {

        setTimeout(() => {
            console.log(n);
        }, 1000 * n);

    }, Math.floor(Math.random() * 1000));
}

// 5. 
function print5(n) {
    setTimeout((() => {
        console.log(n);
    })(), Math.floor(Math.random() * 1000));
}
