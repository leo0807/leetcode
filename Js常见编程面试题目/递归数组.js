function reverse(arr, tmp) {
    if (arr[1] === null) {
        return [arr[0], tmp];
    }
    tmp = tmp ? [arr[0], tmp] : [arr[0], null];
    return reverse(arr[1], tmp);
}
const a = [1, [2, [3, [4, null]]]];
console.log(reverse(a));

function reverseArr(arr) {
    let path = [];
    while (arr) {
        path.push(arr.shift());
        arr = arr[0];
    }
    let real = [arr];
    while (path.length) {
        let a = [];
        a.unshift(path.shift(), real[0] ? real.slice() : null);
        real = a;
    }
    return real;
}

console.log(reverseArr(a));