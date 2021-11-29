/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let res = [], map = new Map();
  groupSizes.map((item, i) => {
    let mapItem = map.get(item) || [];
    if (mapItem.length < item - 1) {
      map.set(item, [...mapItem, i])
    } else if (mapItem.length === item - 1) {
      res.push([...mapItem, i])
      map.delete(item)
    }
  })
  return res;
};