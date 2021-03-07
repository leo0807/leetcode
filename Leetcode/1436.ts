function destCity(paths: string[][]): string {
    let start = new Map(),
        end = new Map();
    for(let i of paths){
        start.set(i[0], 1);
        if(end.has(i[1])){
            end.delete(i[1]);
        }else{
            end.set(i[1], 1);
        }
    }
    for(let [key, val] of end){
        if(start.has(key)){
            end.delete(key);
        }
    }
    return [...end.keys()][0];
};