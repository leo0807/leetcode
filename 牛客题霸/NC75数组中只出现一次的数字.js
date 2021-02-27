/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
function FindNumsAppearOnce(array) {
    // write code here
    let map = new Map();
    for (const i of array) {
        if (map.has(i)) {
            map.delete(i);
        } else {
            map.set(i, 1);
        }
    }
    return Array.from(map.keys());
}
module.exports = {
    FindNumsAppearOnce: FindNumsAppearOnce
};