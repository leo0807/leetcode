{/* <input type="text" id="input"> */ }
// 防抖 
// 触发完事件 n 秒内不再触发事件，事件才执行
let dom = document.getElementById('input');
dom.addEventListener('input', debounce(function (e) {
    console.log(e.target.value);
}, 1000));
function log(e) {
    console.log(e.target.value);
}
function debounce(fn, time) {
    let timer = null;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, time);
    }
}
// 如果你持续触发事件，每隔一段时间，只执行一次事件
function throttle(fn, time) {
    let timer = null;
    return function () {
        if (timer) { return; };
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, time);
    }
}
// #container{
//     width: 100px;
//     height: 100px;
//     background - color: yellowgreen;
//     text - align: center;
//     line - height: 100px;
//     font - size: 20px;
// }
// <div id="container">0</div>
// let dom = document.getElementById('container');
// dom.addEventListener('mouseover', throttle(function (e) {
//     dom.innerText++;
// }, 1000));
// function log(e) {
//     console.log(e.target.value);
// }