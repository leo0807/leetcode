/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length - 1, maxArea = 0, width, tmpHeight;
    while (left < right) {
        width = right - left;
        if (height[left] < height[right]) {
            tmpHeight = height[left];
            left++;
        } else {
            tmpHeight = height[right];
            right--;
        }
        let area = width * tmpHeight;
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};