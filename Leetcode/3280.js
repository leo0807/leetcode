/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    return date.match(/\d+/g).map(item => parseInt(item, 10).toString(2)).join("-");
};
