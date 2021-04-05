Number.prototype.add = function (n) {
    return typeof n === 'number' && this + n;
}
Number.prototype.minus = function (n) {
    return typeof n === 'number' && this - n;
}
console.log((5).add(1).minus(2));