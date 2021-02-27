/**
 * 验证IP地址
 * @param IP string字符串 一个IP地址字符串
 * @return string字符串
 */
function solve(IP) {
    // write code here
    return isIPv4(IP) ? 'IPv4' : (isIPv6(IP) ? 'IPv6' : 'Neither');
}
function isIPv4(IP) {
    let arr = IP.split('.');
    if (arr.length !== 4) return false;
    for (let i of arr) {
        if (Object.is(Number(i), NaN) || Number(i) > 255 || Number(i) < 0 || (i[0] === '0' && i.length !== 1)) {
            return false;
        }
    }
    return true;
}
function isIPv6(IP) {
    let arr = IP.split(':');
    if (arr.length !== 8) return false;
    for (let i of arr) {
        if (i.length > 4 || Object.is(parseInt(i, 16), NaN)) {
            return false;
        }
    }
    return true;
}
module.exports = {
    solve: solve
};