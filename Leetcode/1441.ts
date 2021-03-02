function buildArray(target: number[], n: number): string[] {
    let curIndex: number = 0;
    let preVal: number = 1;
    let res: string[] = [];
    for(let i: number = 1; i <= n; i++){
        if(curIndex === target.length) break;
        res.push("Push");
        if(i === target[curIndex]){
            curIndex++;
        }else{
            res.push("Pop");
        }
    }
    return res;
};