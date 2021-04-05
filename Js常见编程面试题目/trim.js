String.prototype.myTrim = function () {
    return this.replace(/^\s+/, '').replace(/\s+$/, '');
}
let a = "   s  s  ";
String.prototype.myTrim1 = function () {
    let str = this;
    let left = 0, right = str.length - 1;
    while (str[left] === ' ') ++left;
    while (str[right] === ' ') --right;
    return str.substr(left, right);
}
// console.log(a.myTrim());
console.log(a.myTrim1());