class Queue {
    constructor() {
        this.taskList = [];
    }
    task(fn, delay) {
        function callback() {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    fn();
                    resolve();
                }, delay);
            })
        }
        this.taskList.push(callback);
        return this;
    }
    async start() {
        while (this.taskList.length) {
            await this.taskList.shift()();
        }
    }
}

new Queue()
    .task(() => console.log(1), 1000)
    .task(() => console.log(2), 2000)
    .task(() => console.log(3), 1000)
    .start();