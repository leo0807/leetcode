function cotinueStr(str) {
    let left = -1, max = 0, res = "";
    let map = new Map();
    for (let i = 0, len = str.length; i < len; i++) {
        if (map.has(str[i])) {
            left = Math.max(map.get(str[i]) + 1, left);
        }
        let len = i - left + 1;
        // if (max < len) {
        //     max = len;

        // }
        map.set(str[i], i);
        res = str.substring(left, i + 1);
    }
    console.log(max);
    return res;
}