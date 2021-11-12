/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const map = {
    5: 0,
    10: 0,
    20: 0
  };
  for (const i of bills) {
    if (i === 5) {
      map[i]++;
    } else if (i === 10) {
      map[i]++;
      if (map[5] === 0) return false;
      else map[5]--;
    } else {
      map[i]++;
      if (map[5] > 0 && map[10] > 0) {
        map[5]--;
        map[10]--;
      }
      else if (map[5] >= 3) {
        map[5] -= 3;
      } else return false;
    }
  }
  return true;
};