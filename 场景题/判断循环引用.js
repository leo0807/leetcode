var a = {
    b: { d: null },
    c: null
};
a.b.d = a;
// a.c = a.c;

function isCycle(obj) {
    try {
        JSON.stringify(obj);
        return false;
    } catch (e) {
        return true;
    }
}

function isCycle2(obj) {
    const seenObjs = [];
    const detect = (obj) => {
        if (typeof obj === 'object') {
            if (seenObjs.indexOf(obj) > -1) {
                return true;
            }
        }
        seenObjs.push(obj);
        for (let i in obj) {
            if (obj.hasOwnProperty(i) && detect(obj[i])) {
                return true;
            }
        }
        return false;
    }

    return detect(obj);
}


// function circleReference(obj) {
//     for (let i in obj) {
//         if (typeof obj[i] === 'object' && obj[i] === obj) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(circleReference(a));
console.log(isCycle2(a));