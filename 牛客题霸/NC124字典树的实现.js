/**
 * 
 * @param operators string字符串二维数组 the ops
 * @return string字符串一维数组
 */
function trieU(operators) {
    // write code here
    const res = [];
    let map = new Map();
    for (const i of operators) {
        switch (i[0]) {
            case "1":
                map.set(i[1], 1);
                break;
            case "2":
                map.delete(i[1]);
                break;
            case "3":
                if (map.has(i[1])) {
                    res.push("YES");
                } else {
                    res.push("NO");
                }
                break;
            case "4":
                let count = 0;
                map.forEach((val, key) => {
                    if (key.includes(i[1])) {
                        count++;
                    }
                });
                res.push(count);
                break;
            default:
                break;
        }
    }
    return res;
}
module.exports = {
    trieU: trieU
};