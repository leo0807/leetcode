function isPrefixOfWord(sentence: string, searchWord: string): number {
    let arr: string[] = sentence.split(' ');
    const length = arr.length,
          len = searchWord.length;
    for(let i: number =0; i < length; i++){
        if(searchWord === arr[i].slice(0, len)){
            return i + 1;
        }
    }
    return -1;
};