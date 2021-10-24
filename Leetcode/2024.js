/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
    const n = answerKey.length;
    let left = 0, max = 0, maxTs = 0, maxFs = 0;
    for (let right = left; right < n; right++) {
        const char = answerKey[right];
        if (char === 'T') {
            maxTs++;
        } else {
            maxFs++;
        }
        const tmpMax = Math.max(maxTs, maxFs);
        if (right - left + 1 - tmpMax > k) {
            const leftChar = answerKey[left];
            if (leftChar === 'T') {
                maxTs--;
            } else {
                maxFs--;
            }
            left++;
        }

        max = Math.max(max, right - left + 1);
    }
    return max;
};