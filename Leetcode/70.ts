function climbStairs(n: number): number {
    if(n === 1) return 1;
    let first: number = 1;
    let second: number = 2;
    for(let i = 3; i <= n; i++){
        let third: number = first + second;
        first = second;
        second = third;
    }
    return second;
};