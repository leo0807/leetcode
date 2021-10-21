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