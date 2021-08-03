/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    var counter = 2;
    for (var i = 2; i < n && counter <= 3; i++) {
        counter += n % i === 0;
    }
    return counter === 3;
};