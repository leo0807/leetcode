var a = 3;
var obj = {
    a: 5,
    fn: function () {
        this.a = 10;
    }
}
var fn2 = obj.fn;
fn2();
console.log(a);
console.log(obj.a)
// 10 5
function a() {
    console.log('a');
    Promise.resolve().then(() => {
        console.log('e');
    });
}

function b() {
    console.log('b');
}

function c() {
    console.log('c');
}

function d() {
    setTimeout(a, 0);
    var temp = Promise.resolve().then(b);
    setTimeout(c, 0);
    console.log('d');
}
d();
// dbaec


// 作者：心里的字节在跳动
// 链接：https://www.nowcoder.com/discuss/598700?type=post&order=time&pos=&page=1&channel=-1&source_id=search_post_nctrack
// 来源：牛客网

function Person(name) {
    this.name = name;
}
Person.prototype.print = function () {
    return this.name;
};

Person('abc');
const a = new Person('abc').print.call({});
console.log(a);

const fn = () => {
    this.x = 'z';
};

const b = { x: 'y' };
fn.call(b);
console.log(b);
// undefined {x: y}


var x = [1, 2, { 'a': 1 }];
y = x;
z = [...x];
y[0] = 2;
y[2].b = 2;
z[2].a = 2;
console.log(x, y, z)

// [ 2, 2, { a: 2, b: 2 } ] [ 2, 2, { a: 2, b: 2 } ] [ 1, 2, { a: 2, b: 2 } ]


// 这题考察的是对象的键名的转换。

// 对象的键名只能是字符串和 Symbol 类型。
// 其他类型的键名会被转换成字符串类型。
// 对象转字符串默认会调用 toString 方法。
// example 1
var a = {}, b = '123', c = 123;
a[b] = 'b';

// c 的键名会被转换成字符串'123'，这里会把 b 覆盖掉。
a[c] = 'c';

// 输出 c
console.log(a[b]);
// example 2
var a = {}, b = Symbol('123'), c = Symbol('123');

// b 是 Symbol 类型，不需要转换。
a[b] = 'b';

// c 是 Symbol 类型，不需要转换。任何一个 Symbol 类型的值都是不相等的，所以不会覆盖掉 b。
a[c] = 'c';

// 输出 b
console.log(a[b]);
// example 3
var a = {}, b = { key: '123' }, c = { key: '456' };

// b 不是字符串也不是 Symbol 类型，需要转换成字符串。
// 对象类型会调用 toString 方法转换成字符串 [object Object]。
a[b] = 'b';

// c 不是字符串也不是 Symbol 类型，需要转换成字符串。
// 对象类型会调用 toString 方法转换成字符串 [object Object]。这里会把 b 覆盖掉。
a[c] = 'c';

// 输出 c
console.log(a[b]);


new Promise(function (resolve) {
    for (var i = 0; i < 10; i++) {
        resolve(i);
    }
}).then(function (i) {
    console.log(i);
});
new Promise(function (resolve) {
    for (var i = 0; i < 10; i++) {
        function a() {
            resolve(i);
        }
    }
    a();
}).then(function (i) {
    console.log(i);
});
// 上面打印 0
// 下面打印 10（因为使用 var 定义是函数作用域，不会为每一个 i 保存一块内存）

// Q1
var a = 1;
function print() {
    console.log(this.a)
}
print() // 1
// Q2
const obj = {
    a: 2,
    print: function () { console.log(this.a) }
}
obj.print(); // 2
// Q3
function Person() {
    this.a = 8
    this.print = function () { console.log(this.a) }
    return { a: 9 }
}
const p = new Person()
console.log(p.a) // 9
console.log(p.print()) // 报错，返回的对象中没有 print 方法
// Q4
'use strict';
var a = 1;
function print() {
    console.log(this.a)
}
print() // 报错 不能给 undefined 添加属性