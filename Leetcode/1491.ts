function average(salary: number[]): number {
    const n: number = salary.length;
    let sum: number = 0,
        min: number = Infinity,
        max: number = -Infinity;
    for(let i of salary){
        min = Math.min(min, i);
        max = Math.max(max, i);
        sum += i;
    }
    return (sum - min - max) / (n - 2);
};