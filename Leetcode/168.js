/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const res = [];
  while (columnNumber) {
    columnNumber--;
    res.push(String.fromCharCode(65 + columnNumber % 26));
    columnNumber = columnNumber / 26 >> 0;
  }
  return res.reverse().join('');
};