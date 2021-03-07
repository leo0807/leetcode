function canMakeArithmeticProgression(arr: number[]): boolean {
    arr.sort((a, b)=> a - b);
    const gap: number = arr[1] - arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] - arr[i - 1] !== gap) return false;
    }
    return true;
};
