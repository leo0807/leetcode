/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations1 = function (digits) {
    if (digits.length < 1) return [];
    const map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }
    let res = [""];
    digits = digits.split("");
    for (const i of digits) {
        const tmp = [];
        for (const j of res) {
            for (const m of map[i]) {
                tmp.push(j + m);
            }
        }
        res = tmp;
    }
    return res;
};

// DFS
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations2 = function (digits) {
    if (digits.length < 1) return [];
    const map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }, n = digits.length;
    let res = [];
    const dfs = function (s, i) {
        if (i === n) {
            res.push(s);
            return;
        }
        const letters = map[digits[i]];
        for (const char of letters) {
            dfs(s + char, i + 1);
        }
    }
    dfs("", 0);
    return res;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations3 = function (digits) {
    if (digits.length < 1) return [];
    const map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }, n = digits.length, queue = [""];

    for (let i = 0; i < n; i++) {
        const level = queue.length;
        for (let j = 0; j < level; j++) {
            const curStr = queue.shift();
            const letters = map[digits[i]];
            for (const char of letters) {
                queue.push(curStr + char);
            }
        }
    }
    return queue;
};