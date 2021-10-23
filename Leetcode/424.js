/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (str, k) {
    let windowStart = 0, map = {}, n = str.length, max = 0, maxRepeatCount = 0;
    for (let windowEnd = 0; windowEnd < n; windowEnd++) {
        const rightChar = str[windowEnd];
        if (!map[rightChar]) {
            map[rightChar] = 0;
        }
        map[rightChar]++;
        maxRepeatCount = Math.max(maxRepeatCount, map[rightChar]);
        if (windowEnd - windowStart + 1 - maxRepeatCount > k) {
            const leftChar = str[windowStart];
            map[leftChar]--;
            windowStart++;
        }
        max = Math.max(max, windowEnd - windowStart + 1);
    }
    return max;
};