// 这道题让我们对一个单词进行部分简写，简写的规则是若干个字母可以用数字来表示，但是不能有两个相邻的数字，具体可以参考题目中给的例子，根据我以往的经验，这种列举所有情况的必定是要用DFS来写的，但是我一时半会又没想到该咋递归，后来我数了一下题目中给的例子的所有情况的个数，是16个，而word有4个字母，刚好是2的4次方，这是巧合吗，当然不是，后来我又发现如果把0到15的二进制写出来，每一个可以对应一种情况，如下所示：

// 0000 word
// 0001 wor1
// 0010 wo1d
// 0011 wo2
// 0100 w1rd
// 0101 w1r1
// 0110 w2d
// 0111 w3
// 1000 1ord
// 1001 1or1
// 1010 1o1d
// 1011 1o2
// 1100 2rd
// 1101 2r1
// 1110 3d
// 1111 4
export class Solution {

    /**
     * generateAbbreviations
     *
     * @param word: the given word
     * @return: the generalized abbreviations of a word
     */
    generateAbbreviations(word) {
        const n = word.length, res = [];
        for (let i = 0; i < Math.pow(2, n); i++) {
            let out = '', count = 0, t = i;
            for (let j = 0; j < n; j++) {
                if (t & 1 === 1) {
                    count++;
                    if (j === n - 1) {
                        //   字符串添加
                        out += count;
                    }
                } else {
                    if (count !== 0) {
                        out += count;
                        count = 0;
                    }
                    out += word[j];
                }
                t >>= 1;
            }
            res.push(out);
        }
        return res;
    }

}

class AbbreviatedWord {
    constructor(str, start, count) {
        this.str = str;
        this.start = start;
        this.count = count;
    }
}


function generate_generalized_abbreviation(word) {
    let wordLen = word.length,
        result = [];
    const queue = [];
    queue.push(new AbbreviatedWord('', 0, 0));
    while (queue.length > 0) {
        const abWord = queue.shift();
        if (abWord.start === wordLen) {
            if (abWord.count !== 0) {
                abWord.str += abWord.count;
            }
            result.push(abWord.str);
        } else {
            // continue abbreviating by incrementing the current abbreviation count
            queue.push(new AbbreviatedWord(abWord.str, abWord.start + 1, abWord.count + 1));

            // restart abbreviating, append the count and the current character to the string
            if (abWord.count !== 0) {
                abWord.str += abWord.count;
            }

            let newWord = abWord.str + word[abWord.start]
            queue.push(new AbbreviatedWord(newWord, abWord.start + 1, 0));
        }
    }
    return result;
}


console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('BAT')}`);
console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('code')}`);