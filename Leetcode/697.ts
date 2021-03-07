function findShortestSubArray(nums: number[]): number {
    let count = new Map(),
        left = new Map(),
        right = new Map();
    const len = nums.length;
    for(let i: number = 0; i < len; i++){
        if(!left.has(nums[i])) left.set(nums[i], i);
        right.set(nums[i],i);
        count.set(nums[i], (count.has(nums[i])? count.get(nums[i]): 0) + 1);
    }
    let degree: number = Math.max(...count.values()),
        res: number = Infinity;
    for(let [key, val] of count){
        if(val === degree){
            res = Math.min(res, right.get(key) - left.get(key) + 1);
        }
    }
    // console.log(left, right, count, degree)
    return res;
};