export class Solution {

    /**
     * isAlienSorted
     *
     * @param words: the array of string means the list of words
     * @param order: a string indicate the order of letters
     * @return: return true or false
     */
    isAlienSorted(words, order) {
        // write your code here.
        const map = {};
        for (let i = 0; i < order.length; i++) {
            map[order[i]] = i;
        }
        for (let i = 1; i < words.length; i++) {
            const min = Math.min(words[i].length, words[i - 1].length);
            for (let j = 0; j < min; j++) {
                if ((map[words[i][j]] - map[words[i - 1][j]]) > 0) break;
                else if ((map[words[i][j]] - map[words[i - 1][j]]) == 0) {
                    if (j === min - 1 && (words[i].length < words[i - 1].length)) return false;
                    else continue;
                } else return false;
            }
        }
        return true;
    }

}