/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    flowerbed.unshift(0);
    flowerbed.push(0);
    for (let i = 0, len = flowerbed.length; i < len - 1; i++) {
        if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;
};