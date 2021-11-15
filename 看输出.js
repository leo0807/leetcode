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


var func1 = x => x;
var func2 = x => { x };
var func3 = x => ({ x });

console.log(func1(1)); // 1
console.log(func2(2)); // undefined
// 如果箭头后有{ } ，则{ } 内有return 则返回return后的值，没有 则返回undefined
// 因为{}和函数体有冲突，相当于
// var func2 = x => {x; return;}
// 应改为 var func2 = x => {return x};
console.log(func3(3)); // {x: 3}
// 相当于 var func3 = x => { return { x: x } };


function Person(name) {
    this.name = name;
}
Person.prototype.print = function () {
    return this.name;
};
Person('abc'); ①
console.log(name) // abc 此时this指向全局window
const a = new Person('abc').print.call({});
console.log(a); // undefined 此时this指向{}

const fn = () => {
    this.x = 'z';
};
const b = { x: 'y' };
fn.call(b);
console.log(b); // {x: 'y'}  实际上没做处理
// ————————————————
// 版权声明：本文为CSDN博主「鹿目圆」的原创文章，遵循CC 4.0 BY - SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/qq_36620428/article/details/114241228

// 定义一个构造器，并扩充它的原型
var Man = function (name) {
    this.name = name;
}
Man.prototype.get_name = function () {
    console.log(this.name);
    return this.name;
}
// 利用 new 产生一个新的函数对象
var myMan = new Man("hero");
// 访问构造器上的扩充方法
var name1 = myMan.get_name(); //hero
setTimeout(myMan.get_name, 0); //undefined
setTimeout(() => myMan.get_name(), 0); //hero
let fn = myMan.get_name;
fn(); //undefined
// 每个函数都有一个prototype属性，这个属性是一个指针，指向一个对象，
// 而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。



var length = 10;
function fn() {
    return this.length + 1;
}
var obj1 = {
    length: 5,
    test1: function () {
        return fn()
    }
}
obj1.test2 = fn;
obj1.test1.call()
obj1.test1()
obj1.test2.call()
obj1.test2()