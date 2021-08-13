/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
    this.res = [], this.index = 0;
    const backTrack = (start, curr) => {
        if (curr.length === combinationLength) {
            return this.res.push(curr);
        }
        for (let i = start; i < characters.length; i++) {
            curr += characters[i];
            backTrack(i + 1, curr);
            curr = curr.slice(0, -1);
        }
    }
    backTrack(0, '');
};
/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
    return this.res[this.index++];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
    return this.res[this.index] || false;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
