function fetch(method, url, data, count) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        method = method || "GET";
        data = data || null;
        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                if (count > 0) {
                    fetch(method, url, data, count - 1);
                } else {
                    reject(xhr.responseText);
                }
            }
        }
        xhr.send(data);
    })
}

function myNew(obj, ...args) {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('xxx');
    }
    const newObj = Object.create(obj.prototype);
    const res = obj.call(newObj, ...args);
    return typeof res === 'object' ? res : newObj;
}

// function Parent() {
//     this.name = 'father';
// }
// function Children() {
//     Parent.call(this);
//     this.age = 12;
// }

// Children.prototype = Object.create(Parent.prototype);
// Children.prototype.constructor = Children;

let arr1 = [[1], [2], [3]];
arr1.map(itme => itme = null)
console.log(arr1);