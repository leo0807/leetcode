// 题目描述
// 将ip地址转换成10进制整数。

// 例如，ip地址为10.0.3.193，把每段拆分成一个二进制形式组合起来为
// 00001010 00000000 00000011 11000001，
// 然后把这个二进制数转变成十进制整数就是167773121。

function ipToInt(ip) {
    ip = ip.split('.');
    let ip1 = Number(ip[0]) << 24,
        ip2 = Number(ip[1]) << 16,
        ip3 = Number(ip[2]) << 8,
        ip4 = Number(ip[3]);
    return ip1 | ip2 | ip3 | ip4;
}
console.log(ipToInt("10.0.3.193"));

function intToIp(num) {
    let res = [];
    res.push((num & 255).toString());
    res.push((num >> 8 & 255).toString());
    res.push((num >> 16 & 255).toString());
    res.push((num >> 24 & 255).toString());
    res.reverse();
    return res.join(".");
}
console.log(intToIp(167773121));