function findLengthOfLCIS(nums: number[]): number {
    const n: number = nums.length;
    let res: number = 0,
        tmp: number = 0;
    for(let i: number = 0; i < n; i++){
        if(i > 0 &&nums[i] <= nums[i - 1]){
            tmp = i;
        }
        res = Math.max(res, i - tmp + 1);
    }
    return res;
};