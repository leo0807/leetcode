// 两个鸡蛋
// 数学推导方法
/**
 * 鸡蛋共有两枚，其中一枚用作确定大致范围，第二颗蛋用作细粒度确定小范围；
 * 设第一层楼层数为bottom，最高层为top，则临界层i位于[bottom, top];
 * 在某层x扔下鸡蛋，如果碎了，则临界层i位于[bottom, x], 此时使用第二颗鸡蛋逐层实验，
 * ; 否则，则位于[x + 1, top];
 *  
 * 若最少操作次数为M，则第一个鸡蛋必然在 x <= M层
 * 楼层 n = M + (M - 1) + (M - 2) + ... + 1 = M (M + 1) / 2 高斯定律
 * 
 * @param {*} n 
 */
var twoEggDrop = function (n) {
    return Math.ceil((-1 + Math.sqrt(n * 8 + 1)) / 2);
};