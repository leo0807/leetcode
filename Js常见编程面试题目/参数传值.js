function getRes(obj, params) {
    let res = [];
    params = params.replace(/[\.\[\]]/g, "").split('');
    for (let i of params) {
        obj = obj[i];
    }
    return obj;
}

console.log(getRes({ a: { b: [1, 2, 3] } }, 'a.b[0]'));