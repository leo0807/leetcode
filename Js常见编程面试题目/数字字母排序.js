let str = "fed123ab456c";
// 数字在前 字母在后
function mixedSorted(str) {
    return str.split('').sort((a, b) => {
        if (a.charCodeAt() > b.charCodeAt()) {
            return 1;
        } else {
            return -1;
        }
    }).join("");
}

console.log(mixedSorted(str));
// 字母在前 数字在后
let str = "a4sa4da5da6";
function sortArr(str) {
    return str.split('').sort((a, b) => {
        a = isNaN(a) ? a.charCodeAt() : a.charCodeAt() + 75;
        b = isNaN(b) ? b.charCodeAt() : b.charCodeAt() + 75;
        return a - b;
    }).join("");
}

console.log(sortArr(str));