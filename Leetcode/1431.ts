function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const len: number = candies.length; 
    let res: boolean[] = new Array(len).fill(false);
    const max: number = Math.max.apply(Math, candies);
    for(let i: number = 0; i < len; i++){
        if(candies[i] + extraCandies >= max){
            res[i] = true;
        }
    }
    return res;
};