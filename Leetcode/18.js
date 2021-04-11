var fourSum = function (nums, target) {
    let res = [];
    let path = [], N = 4;
    nums.sort()
    let backtrace = (start) => {
        if ((path.length == N)) {
            if (path.reduce((prev, curr) => prev + curr) == target) {
                res.push([...path])
            }
            return;
        }
        for (let i = start; i < nums.length; i++) {
            if (nums[i] == nums[i - 1] && i > start) {
                continue;
            }
            path.push(nums[i])
            backtrace(i + 1);
            path.pop()
        }
    }
    backtrace(0)
    return res;
};
