function largestAltitude(gain: number[]): number {
    const len: number = gain.length;
    let arr: number[] = new Array(len + 1);
    arr[0] = 0;
    let res: number = arr[0];
    for(let i: number = 0; i < len; i++){
        arr[i + 1] = arr[i] + gain[i];
        res = Math.max(res, arr[i + 1]);
    }
    return res;
};