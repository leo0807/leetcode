function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    const mLen = l.length;
    let res: boolean[] = [];
    for(let i: number = 0 ; i < mLen; i++){
        let arr: number[] = nums.slice(l[i], r[i] + 1).sort((a, b)=> a - b);
        let tmp: boolean = true;
        const len = arr.length;
        for(let j: number = 1; j < len; j++){
            if(arr[j] - arr[j - 1]  !== arr[1] - arr[0]){
                tmp = false;
                break;
            }
        }
        res.push(tmp);
    }
    return res;
};