// https://www.jianshu.com/p/6f60a6b7f3b8
function baseConverter(decNumber, base) {
    const remStack = [];
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let number = decNumber;
    let rem;
    let baseString = "";
    if (base < 2 || base > 36) {
        return "";
    }
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (remStack.length) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}
console.log(baseConverter(1314, 2));    //10100100010
console.log(baseConverter(1314, 8));    //2442
console.log(baseConverter(1314, 16));    //522
console.log(baseConverter(1314, 20));    //35E
console.log(baseConverter(1314, 30));    //1DO
console.log(baseConverter(1314, 35));    //12J