/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let [year, month, day] = date.split('-').map(Number);
  const isLeap = (year) => ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) === true;
  const arr = [31, 28 + isLeap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30];
  let sum = day;
  while (month-- > 1) {
    sum += arr[month - 1];
  }
  return sum;
};

