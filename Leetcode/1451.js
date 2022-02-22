/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  const len = text.length,
    arr = [];
  text = text.charAt(0).toLowerCase() + text.slice(1);
  text = text.split(" ");
  for (const item of text) {
    if (arr[item.length]) {
      arr[item.length].push(item);
    } else {
      arr[item.length] = [item];
    }
  }
  let res = "";
  for (const item of arr) {
    if (item) {
      res += " " + item.join(" ");
    }
  }
  res = res.substr(1);
  res = res.charAt(0).toUpperCase() + res.slice(1);
  return res;
};