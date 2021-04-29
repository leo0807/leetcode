/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let res = 0, index = 0, len = chars.length;
    while (index < len) {
        let currChar = chars[index];
        let count = 0;
        while (index < len && currChar === chars[index]) {
            count++;
            index++;
        }
        chars[res++] = currChar;
        count = count.toString();
        if (count > 1) {
            for (let i of count) {
                chars[res++] = i;
            }
        }
    }
    return res;
};

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress2 = function (chars) {
    let left = 0, right = 0, len = chars.length, tmp = [];
    while (right < len) {
        right++;
        while (right < len && chars[left] === chars[right]) {
            right++;
        }
        tmp.push(chars[left]);
        if (right - left > 1) {
            tmp.push((right - left).toString());
        }
        left = right;
    }
    tmp = tmp.join("");
    tmp = tmp.split('');
    for (let i = 0, len1 = tmp.length; i < len1; i++) {
        chars[i] = tmp[i];
    }
    return tmp.join("").length;
};
