function mergeAlternately(word1: string, word2: string): string {
    let word1Arr: string[] = word1.split('');
    let word2Arr: string[] = word2.split('');
    let res: string[] = [];
    while(word1Arr.length && word2Arr.length){
        res.push(word1Arr.shift());
        res.push(word2Arr.shift());
    }
    if(word1Arr.length) res = res.concat(word1Arr);
    if(word2Arr.length) res = res.concat(word2Arr);

    return res.join('');
};