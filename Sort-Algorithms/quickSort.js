function quickSort(arr, low, high) {
    // console.log(arr);
    if (low < high) {
        let index = getIndex(arr, low, high);
        quickSort(arr, low, index - 1);
        quickSort(arr, index + 1, high);
    }
}

function getIndex(arr, low, high) {
    let tmp = arr[low];
    while (low < high) {
        while (low < high && arr[high] >= tmp) {
            high--;
        }
        arr[low] = arr[high];
        while (low < high && arr[low] <= tmp) {
            low++;
        }
        arr[high] = arr[low];
    }
    arr[low] = tmp;
    return low;
}

// 非递归实现
function quickSort1(num) {
    _quickSort(num, 0, num.length - 1); // 将整个num数组快速排序，left和right分别指向数组左右两端。
}
/**
 * 快速排序(非递归)
 */

function _quickSort(num, left, right) {
    var list = [[left, right]]; // 将[left,right]存入数组中，类似于递归入栈
    while (list.length > 0) { // 若list不为空，循环弹出list最后一个数组进行快排
        var now = list.pop(); // 弹出list末尾。(也可用list.shift()取出list第一个数组，但在数据量较大时，这种方式效率较低)
        if (now[0] >= now[1]) { // 若左右指针相遇，待排序数组长度小宇1，则无需进行快排(注意不能写成now[0]==now[1]，这里now[0]是有可能大于now[1]的
            continue;
        }
        var i = now[0], j = now[1], flag = now[0]; // 以下与递归方法相同，请参考上面的递归详解
        while (i < j) {
            while (num[j] >= num[flag] && j > flag) j--;
            if (i >= j) {
                break;
            }
            while (num[i] <= num[flag] && i < j) i++;
            let temp = num[flag];
            num[flag] = num[j];
            num[j] = num[i];
            num[i] = temp;
            flag = i;
        }
        list.push([now[0], flag - 1]); // 将flag左边数组作为待排序数组，只需将左右指针放入list即可。
        list.push([flag + 1, now[1]]); // 将flag右边数组作为待排序数组，只需将左右指针放入list即可。
    }
}
let tmp1 = [32, 4, 231, 42, 2, 6, 6, 7, 11];
// quickSort1(tmp1);
quickSort(tmp1, 0, 8)
console.log(tmp1);

