function ysf(n, m) {
    // write code here
    if (n < 1 || m < 1) return -1;
    if (n === 1) return 1;
    return (ysf(n - 1, m) + m - 1) % n + 1;
}

function ysf(n, m) {
    // write code here
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    let index = (m - 1) % n;
    while (arr.length > 1) {
        arr.splice(index, 1);
        index = (index + m - 1) % arr.length;
    }
    return arr[0];
}

// \\迭代
// public int lastRemaining(int n, int m) {
//     int flag = 0;
//     for (int i = 2; i <= n; i++) {
//         flag = (flag + m) % i;
//         //动态规划的思想，将f(n,m)替换成flag存储
//     }
//     return flag;
// }

// 作者：yuanninesuns
// 链接：https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/si-chong-fang-fa-xiang-xi-jie-da-by-yuanninesuns/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。