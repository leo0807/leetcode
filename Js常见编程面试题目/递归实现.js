function toBinary(num) {
    if (num === 0) {
        return "";
    }
    return "" + toBinary(Math.floor(num / 2)) + num % 2;
}
console.log(toBinary(17));