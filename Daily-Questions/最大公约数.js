
function primeFactor(num) {
    let res = [];
    let factor = 2;//最小的质数
    while (factor <= num) { //合数大于等于质数
        if (num % factor === 0) { //刚开始是除以2这个质数，一直除到到没有2的质数因数为止
            num = num / factor;
            res.push(factor);
        } else {
            factor++;
        }
    }
    return res;
}

// console.log(primeFactor(35));

function GCD1(num1, num2) {
    let res = 0;
    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            res = i;
        }
    }
    return res;
}
// console.log(GCD1(18, 24));
function GCD2(num1, num2) {
    let tmp = 0;
    tmp = num1 % num2;
    if (tmp === 0) {
        console.log(num2);
        return num2;
    } else {
        num1 = num2;
        num2 = tmp;
        GCD2(num1, num2);
    }
}

function GCD3(n1, n2) {

    while (n1 != n2) {
        if (n1 > n2)//① 若a>b，则a=a-b
            n1 -= n2;
        else
            n2 -= n1;//② 若a<b，则b=b-a
    }
    return n1;//若a=b，则a（或b）即为两数的最大公约数
}
console.log(GCD2(18, 24));