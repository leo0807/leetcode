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