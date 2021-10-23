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

function find_subarrays(arr, target) {
    let result = [],
        product = 1,
        left = 0;
    for (right = 0; right < arr.length; right++) {
        product *= arr[right];
        while ((product >= target && left < arr.length)) {
            product /= arr[left];
            left += 1;
        }
        // since the product of all numbers from left to right is less than the target therefore,
        // all subarrays from left to right will have a product less than the target too; to avoid
        // duplicates, we will start with a subarray containing only arr[right] and then extend it
        const tempList = [];
        for (let i = right; i > left - 1; i--) {
            tempList.unshift(arr[i]);
            result.push(tempList.toArray());
        }
    }
    return result;
}
