let m = [...Array(10000).keys()].filter(x => x.toString().length > 1 && x === Number(x.toString().split('').reverse().join("")));
console.log(m);