function numberOfArithmeticSlices(nums: number[]): number {
    let res: number = 0,
        dp: number = 0;
    const len = nums.length;
    for(let i = 2; i < len; i++){
        if(nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]){
            dp++;
            res += dp;
        }else{
            dp = 0;
        }
    }
    return res;
};