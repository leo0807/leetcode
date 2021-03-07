function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let res: number = 0;
    const n: number = arr.length;
    for(let i: number = 0; i < n; i++){
        for(let j: number = i + 1; j < n; j++){
            for(let k: number = j + 1; k < n; k++){
                if(Math.abs(arr[i] - arr[j]) <= a &&
                   Math.abs(arr[j] - arr[k]) <= b &&
                   Math.abs(arr[i] - arr[k]) <= c){
                    res++;
                }
            }
        }
    }
    return res;
};