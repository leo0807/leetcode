function minNumberInRotateArray(rotateArray) {
    // write code here
    let left = 0,
        right = rotateArray.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (rotateArray[left] < rotateArray[right]) {
            return rotateArray[left];
        }
        if (rotateArray[mid] > rotateArray[right]) {
            left = mid + 1;
        } else if (rotateArray[mid] < rotateArray[right]) {
            right = mid;
        } else {
            right--;
        }
    }
    return rotateArray[left];
}

// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。   
// [3, 4, 5, 1, 2]
// 1

// O(n) 时间复杂度
// class Solution:
//     def minArray(self, numbers: List[int]) -> int:
//         for i in range(0, len(numbers)):
//             if i == len(numbers) - 1:
//                 return numbers[0]      #如果已经是升序 则返回第一个元素
//             if numbers[i] - numbers[i + 1] > 0:
//                 return numbers[i + 1]    #否则找两段的升降交界点，交界点后一个就是最小值


// class Solution {
//     public int minArray(int[] numbers) {
//         if (numbers.length == 0) return 0;
//         if (numbers.length == 1) return numbers[0];
//         LinkedList < Integer > stack = new LinkedList <> ();
//         stack.add(numbers[0]);
//         for (int i = 1; i < numbers.length; i++) {
//             if (stack.peekLast() > numbers[i]) {
//                 return numbers[i];
//             }
//             stack.add(numbers[i]);
//         }
//         return numbers[0];
//     }
// }
