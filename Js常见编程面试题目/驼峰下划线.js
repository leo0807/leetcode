function underToCamel(str) {
    return str.replace(/\_(\w)/g, function (all, letter) {
        console.log(all, letter);
        return letter.toUpperCase();
    });
}
// 添加g为全局匹配，修改所有匹配项，否则指修改一个

console.log(underToCamel('a_b2_345_c2345'));
function CamelToUnderLine(str) {
    return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}
// 假如第一个参数是 RegExp对象，并且 n 是个小于100的非负整数，
// 那么插入第 n 个括号匹配的字符串。提示：索引是从1开始。
// 如果不存在第 n个分组，那么将会把匹配到到内容替换为字面量。
// 比如不存在第3个分组，就会用“$3”替换匹配到的内容。

console.log(CamelToUnderLine('aBdaNf'));

// Replace相关API
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
/**
 *
 *
 */

function replacer(match, p1, p2, p3, offset, str, namedGroup) {
    // match 匹配的子串
    // 假如replace()方法的第一个参数是一个RegExp 对象，则代表第n个括号匹配的字符串。
    // （对应于上述的$1，$2等。）例如，如果是用 / (\a +) (\b +) / 这个来匹配，p1 就是匹配的 \a+，p2 就是匹配的 \b+。
    // offset	
    // 匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是 'abcd'，
    // 匹配到的子字符串是 'bc'，那么这个参数将会是 1）
    // namedGroup	命名捕获组匹配的对象
}