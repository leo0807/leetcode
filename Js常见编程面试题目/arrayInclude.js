function arrayInclude(arrA, arrB) {
    let lenA = arrA.length;
    for (let i = 0; i < lenA; i++) {
        if (arrB.includes(arrA[i])) {
            arrB.splice(arrB.indexOf(arrA[i]), 1);
            arrA[i] = ''
        }
    }
    let lenB = arrB.length;
    for (let i = 0; i < lenB; i++) {
        if (arrA.includes(arrB[i])) {
            arrA.splice(arrA.indexOf(arrB[i]), 1);
            arrB[i] = '';
        }
    }
    lenA = arrA.join('').length;
    lenB = arrB.join('').length;
    if (lenA === 0 && lenB === 0) {
        return 0;
    } else if (lenA === 0 && lenB > 0) {
        return 1;
    } else if (lenB === 0 && lenA > 0) {
        return 2;
    } else {
        return -1;
    }
}

var a1 = [4, 2, 3, 1, 4]
var a2 = [4, 2, 3, 1, 4, 5]
console.log(arrayInclude(a1, a2)) // 1
var a3 = [4, 2, 3, 1, 4]
var a4 = [4, 2, 3, 1]
console.log(arrayInclude(a3, a4)) // 2
var a5 = [4, 2, 3, 1, 4]
var a6 = [4, 2, 3, 1, 4]
console.log(arrayInclude(a5, a6)) // 0
var a7 = [4, 2, 3, 1, 4]
var a8 = [3, 2, 3, 1, 4]
console.log(arrayInclude(a7, a8)) // -1