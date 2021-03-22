function minSubArrayLen(target: number, nums: number[]): number {
    let res: number = Infinity;
    let left: number = 0, len: number = nums.length, sum: number = 0;
    
    for(let i: number = 0; i < len; i++){
        sum += nums[i]
        while(sum >= target){
            res = Math.min(res, i - left + 1);
            sum -= nums[left++];
        }
    }
    return res === Infinity? 0: res;
};