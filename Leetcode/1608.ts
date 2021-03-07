function specialArray(nums: number[]): number {
    let index = 0;
    nums.sort((a, b)=> b - a);
    while(index < nums.length && index < nums[index]){index++};
    return (index < nums.length && index == nums[index])? -1: index;
};