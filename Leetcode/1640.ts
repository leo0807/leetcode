function canFormArray(arr: number[], pieces: number[][]): boolean {
    const n: number = pieces.length;
    let res: string = "";
    let sArr: string = arr.join("");
    for(let i: number = 0; i < n; i++){
        let tmp: string = pieces[i].join("");
        if(sArr.indexOf(tmp) === -1) return false;
        res += tmp;
    }
    return res.length === sArr.length;
};