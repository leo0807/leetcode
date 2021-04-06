function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
};
Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};
function getName() {
    console.log(5);
};

Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();

// 答案：
// Foo.getName(); //2
// getName(); //4
// Foo().getName(); //1
// getName(); //1
// new Foo.getName(); //2
// new Foo().getName(); //3
// new new Foo().getName(); //3

// 来源：https://juejin.cn/post/6844904033312833550
// 来源：https://www.cnblogs.com/xxcanghai/p/5189353.html

/**
 * 一、解析： 1.Foo.getName()
 * 首先定义了一个叫Foo的函数，之后为Foo创建了一个叫getName的静态属性存储了一个匿名函数，
 * 之后为Foo的原型对象新创建了一个叫getName的匿名函数。之后又通过函数变量表达式创建了一个getName的函数，
 * 最后再声明一个叫getName函数。第一问的 Foo.getName 自然是访问Foo函数上存储的静态属性，自然是2
 *
 *
 *
 * 3.Foo().getName()
 * 我们在执行Foo()函数的时候getName这个变量提升到外部的全局作用域中了，因为在js中，
 * 如果对于一个变量没用用var 或者 let等声明的话，他就默认是全局属性,就是window对象的一个属性。
 * 所以在这里我们的全局的getName又被改了，因为我们Foo()执行的时候返回了this而这里的this就是window对象
 * 我们需要知道的是在浏览器中所有全局的声明都是window对象的属性和方法，
 * 所以这里我们调用this.getName()就会返回1了。
 *
 *
 * 5. new Foo.getName() ===> new (Foo.getName)();
 * 实际上将getName函数作为了构造函数来执行，遂弹出2
 *
 *
 * 6. new Foo().getName() ===> (new Foo()).getName()
 *
 * new一个构造函数的过程大致为，以构造函数原型创建一个对象（继承原型链），
 * 调用构造函数并将this指向这个新建的对象，好让对象继承构造函数中的构造器属性，
 * 如果构造函数没有手动返回一个对象，则返回这个新建的对象。
 * 遂先执行Foo函数，而Foo此时作为构造函数却有返回值，所以这里需要说明下js中的构造函数返回值问题
 * 返回的是this，而this在构造函数中本来就代表当前实例化对象，遂最终Foo函数返回实例化对象。
 *
 *之后调用实例化对象的getName函数，因为在Foo构造函数中没有为实例化对象添加任何属性，
 遂到当前对象的原型对象（prototype）中寻找getName，找到了。遂最终输出3


7. new new Foo().getName(); 同样是运算符优先级问题。
最终实际执行为：
new ((new Foo()).getName)();
先初始化Foo的实例化对象，然后将其原型上的getName函数作为构造函数再次new。
遂最终结果为3
 */