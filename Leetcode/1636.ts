function frequencySort(nums: number[]): number[] {
    let map = new Map();
    for(let i of nums){
        if(map.has(i)){
            map.set(i, map.get(i) + 1);
        }else{
            map.set(i, 1);
        }
    }
    map = new Map([...map].sort((a, b)=>{
        return a[1] === b[1]? b[0] - a[0]: a[1] - b[1];
    }));
    let res: number[] = []; 
    for(let [key, val] of map){
        while(val > 0){
            res.push(key);
            val--;
        }
    }
    return res;
};