// 二分法第一种写法
// 第一种写法，我们定义 target 是在一个在左闭右闭的区间里，也就是[left, right] （这个很重要非常重要）。

// 区间的定义这就决定了二分法的代码应该如何写，因为定义target在[left, right]区间，所以有如下两点：

// while (left <= right) 要使用 <= ，因为left == right是有意义的，所以使用 <=
// if (nums[middle] > target) right 要赋值为 middle - 1，因为当前这个nums[middle]一定不是target，那么接下来要查找的左区间结束下标位置就是 middle - 1
// 二分法第二种写法
// 如果说定义 target 是在一个在左闭右开的区间里，也就是[left, right) ，那么二分法的边界处理方式则截然不同。

// 有如下两点：

// while (left < right)，这里使用 < , 因为left == right在区间[left, right) 是没有意义的
// if (nums[middle] > target) right 更新为 middle，因为当前nums[middle]不等于target，去左区间继续寻找，而寻找区间是左闭右开区间，所以right更新为middle，即：下一个查询区间不会去比较nums[middle]

// 区别在于 mid = (left + right) / 2， if (nums[middle] > target)中的mid会根据开别区别的不同而不同
// 如left <= right， 则mid可能为left也可能为right， 所以right = mid；若没有等号，则只可能为left，所以 right = mid - 1
// （版本一）左闭右闭区间

var search = function (nums, target) {
    let l = 0, r = nums.length - 1;
    // 区间 [l, r]
    while (l <= r) {
        let mid = (l + r) >> 1;
        if (nums[mid] === target) return mid;
        let isSmall = nums[mid] < target;
        l = isSmall ? mid + 1 : l;
        r = isSmall ? r : mid - 1;
    }
    return -1;
};

// （版本二）左闭右开区间

var search = function (nums, target) {
    let l = 0, r = nums.length;
    // 区间 [l, r）
    while (l < r) {
        let mid = (l + r) >> 1;
        if (nums[mid] === target) return mid;
        let isSmall = nums[mid] < target;
        l = isSmall ? mid + 1 : l;
        // 所以 mid 不会被取到
        r = isSmall ? r : mid;
    }
    return -1;
};
