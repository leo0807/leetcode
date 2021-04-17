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