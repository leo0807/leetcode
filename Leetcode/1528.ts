function restoreString(s: string, indices: number[]): string {
    let res: string[] = new Array(s.length).fill("");
    for(let i = 0; i < s.length; i++){
        res[indices[i]] = s[i];
    }
    return res.join('');
};