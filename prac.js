//setTimeout(() => console.log('hi'), 500);
const sleep = func(setTimeout);
sleep(500).then(() => console.log('hi'));

function func(fn) {
    return function (...args) {
        return new Promise((resolve) => {
            args.unshift(resolve);
            fn(...args);
        });
    }
}

fs.readFile('1.txt', (err, data) => {
});

const newReadFile = promisify(fs.readFile);

newReadFile('1.txt')
    .then(data => { })
    .catch(err => { });

function promisify(fn) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            args.push(function (error, result) {
                if (error) reject(error);
                else resolve(result);
            })
            fn(...args);
        })
    }
}