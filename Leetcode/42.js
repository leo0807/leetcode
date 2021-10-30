// 双指针列计算
function trap(height) {
    let left = 0, right = height.length - 1,
        res = 0, leftMax = 0, rightMax = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            res += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            res += rightMax - height[right];
            right--;
        }
    }
    return res;
};

// 双指针 按照列计算雨水高度
var trap = function (height) {
    let sum = 0;
    for (let i = 0; i < height.length; i++) {
        // 第一个柱子和最合一个柱子不接雨水
        if (i === 0 || i === height.length - 1) continue;
        // 记录左右两边最高的柱子
        let rHeight = height[i];
        let lHeight = height[i];
        for (let r = i + 1; r < height.length; r++) {
            if (height[r] > rHeight) rHeight = height[r];
        }
        for (let l = i - 1; l >= 0; l--) {
            if (height[l] > lHeight) lHeight = height[l];
        }
        const h = Math.min(lHeight, rHeight) - height[i];
        if (h > 0) sum += h;
    }
    return sum;
};

// 动态规划
// 为了的到两边的最高高度，使用了双指针来遍历，每到一个柱子都向两边遍历一遍，这其实是有重复计算的。
// 我们把每一个位置的左边最高高度记录在一个数组上（maxLeft），右边最高高度记录在一个数组上（maxRight）。
// 这样就避免了重复计算，这就用到了动态规划。

var trap2 = function (height) {
    if (height.length <= 2) return 0;
    const size = height.length;
    const maxLeft = Array(size).fill(0);
    const maxRight = Array(size).fill(0);

    // 记录每个柱子左边柱子的最大高度
    maxLeft[0] = height[0];
    for (let i = 1; i < size; i++) {
        maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
    }
    maxRight[size - 1] = height[size - 1];
    for (let i = size - 2; i >= 0; i--) {
        maxRight[i] = Math.max(height[i], maxRight[i + 1]);
    }
    // 求和
    let sum = 0;
    for (let i = 0; i < size; i++) {
        const count = Math.min(maxLeft[i], maxRight[i]) - height[i];
        if (count > 0) sum += count;
    }
    return sum;
}
// 单调栈
// 单调栈存储下标，如果栈内有至少两个元素
var trap3 = function (height) {
    let ans = 0;
    const stack = [];
    const n = height.length;
    for (let i = 0; i < n; i++) {
        // 记栈顶元素为 \textit{top}top，\textit{top}top 的下面一个元素是 \textit{left}left，则一定有 \textit{height}[\textit{left}] \ge \textit{height}[\textit{top}]height[left]≥height[top]

        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (!stack.length) break;
            const left = stack[stack.length - 1];
            const currWidth = i - left + 1;
            const currHeight = Math.min(height[left], height[i]) - height[top];
            ans += currHeight * currHeight;
        }
        // 为了得到 \textit{left}left，需要将 \textit{top}top 出栈。在对 \textit{top}top 计算能接的雨水量之后，\textit{left}left 变成新的 \textit{top}top

        stack.push(i);
    }
    return ans;
}

// 单调栈2
// 1. 按照行的方向计算
// 2. 使用单调栈内元素的顺序
// 新元素高度大于栈头元素，则说明出现凹槽
// 3. 遇到相同高度的柱子
// 更新栈内元素下标，完成置换
var trap3 = function (height) {
    const size = height.length;
    if (size <= 2) return 0;
    const stack = [];
    stack.push(0);
    let sum = 0;
    for (let i = 1; i < size; i++) {
        // 当前遍历的元素（柱子）高度小于栈顶元素的高度，就把这个元素加入栈中，因为栈里本来就要保持从小到大的顺序（从栈头到栈底）
        if (height[i] < height[stack[stack.length - 1]]) {
            stack.push(i);
        } else if (height[i] === height[stack[stack.length - 1]]) {
            // 高度相同
            stack.pop();
            stack.push(i);
        } else {
            while (!stack.length && height[i] > height[stack[stack.length - 1]]) {
                const mid = stack[stack.length - 1];
                stack.pop();
                if (!stack.length) {
                    const h = Math.min(height[stack[stack.length - 1]], height[i]) - height[mid];
                    const w = i - stack[stack.length - 1] - 1;
                    sum += h * w;
                }
            }
            stack.push(i);
        }

    }
    return sum;
}