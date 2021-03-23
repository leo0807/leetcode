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

