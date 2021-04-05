const list = [1, 2, 3];
// 下面代码一秒后输出1，2，3
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}

// function test() {
//   list.forEach(async x => {
//     const res = await square(x)
//     console.log(res)
//   })
// }
// test()

// 每隔1秒输出一个数字
async function test() {
    for (let i of list) {
        const res = await square(i);
        console.log(res);
    }
}
test()