// 有一堆扑克牌，将牌堆第一张放到桌子上，再将接下来的牌堆的第一张放到牌底，如此往复；
// 最后桌子上的牌顺序为： (牌底) 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13(牌顶) ；
// 问：原来那堆牌的顺序，用函数实现。


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function pokeSort(arr) {
    let res = [];
    while (arr.length) {
        if (arr.length % 2 === 1) res.push(arr.pop());
        else res.push(arr.shift());
    }
    return res;
}

console.log(pokeSort(arr));

function washPoke1(arr) {
    let res = [];
    while (arr.length) {
        res.unshift(arr.pop());
        arr.length > 0 && res.push(arr.pop());
    }
    return res;
}
// console.log(washPoke1([13, 1, 12, 2, 11, 3, 10, 4, 9, 5, 8, 6, 7]));


// 魔术师手中有一堆扑克牌，观众不知道它的顺序，接下来魔术师：
// 从牌顶拿出一张牌， 放到桌子上
// 再从牌顶拿一张牌， 放在手上牌的底部
// 如此往复（不断重复以上两步），直到魔术师手上的牌全部都放到了桌子上。
// 此时，桌子上的牌顺序为： (牌顶) 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13(牌底) 。
// 问：原来魔术师手上牌的顺序，用函数实现。
function washPoke(arr) {
    let res = [];
    while (arr.length) {
        res.push(arr.shift());
        arr.length > 0 && arr.push(arr.shift());
    }
    return res;
}
// console.log(washPoke([7, 10, 6, 13, 5, 9, 4, 11, 3, 8, 2, 12, 1].reverse()));
function getOrigin(arr) {
    // 输入顶->底
    let res = [];
    while (arr.length) {
        res.unshift(arr.shift());
        arr.length > 0 && res.unshift(res.pop());
    }
    return res;
}
// console.log(getOrigin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].reverse()));