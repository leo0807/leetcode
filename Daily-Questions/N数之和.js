function numSum(nums, n, m) {
    if (!nums.length || nums.length < n) return [];
    nums = nums.sort((a, b) => a - b);
    const result = [];
    const stack = [];

    const backTrace = (start) => {
        if (stack.length === n - 1) {
            let end = nums.length - 1;

            while (start <= end) {
                const temp = stack.reduce((acc, cur) => acc + cur);
                if (temp + nums[start] === m) {
                    result.push([...stack, nums[start]]);
                }
                if (start !== end && temp + nums[end] === m) {
                    result.push([...stack, nums[end]]);
                }
                start++;
                end--;
            }
            return;
        }
        for (let i = start; i < nums.length; i++) {
            stack.push(nums[i]);
            backTrace(i + 1);
            stack.pop();
        }
    };
    backTrace(0);
    return result;
}
console.log(numSum([2, 3, 4, 5], 2, 8));


// 参数依次为目标数组、选取元素数目、目标和
const search = (arr, count, sum) => {
    // 计算某选择情况下有几个 1，也就是选择元素的个数
    const getCount = num => {
        let count = 0
        while (num) {
            num &= (num - 1)
            count++
        }
        return count
    }

    let len = arr.length, bit = 1 << len, res = []

    // 遍历所有的选择情况
    for (let i = 1; i < bit; i++) {
        // 满足选择的元素个数 === count
        if (getCount(i) === count) {
            let s = 0, temp = []

            // 每一种满足个数为 N 的选择情况下，继续判断是否满足 和为 M
            for (let j = 0; j < len; j++) {
                // 建立映射，找出选择位上的元素
                if (i & 1 << (len - 1 - j)) {
                    s += arr[j]
                    temp.push(arr[j])
                }
            }

            // 如果这种选择情况满足和为 M
            if (s === sum) {
                res.push(temp)
            }
        }
    }

    return res
}