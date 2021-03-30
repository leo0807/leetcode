var a = {
    b: null,
    c: null
};
a.b = a;
a.c = a.c;

function circleReference(obj) {
    for (let i in obj) {
        if (typeof obj[i] === 'object' && obj[i] === obj) {
            return true;
        }
    }
    return false;
}
console.log(circleReference(a));