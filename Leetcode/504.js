var convertToBase7 = function (nums) {
    if (nums === 0) return "0";
    let sign = nums > 0;
    if (!sign) {
        nums = Math.abs(nums);
    }
    let res = [];
    while (nums !== 0) {
        res.push(nums % 7);
        nums = Math.floor(nums / 7);
    }

    return sign ? res.reverse().join("") : "-" + res.reverse().join("");
};