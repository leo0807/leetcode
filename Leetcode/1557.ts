function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    let map: number[] = new Array(n);
    let res: number[] = [];
    for(let [_, val] of edges){
        map[val] = 1;
    }
    for(let i = 0; i < n; i++){
        if(!map[i]) res.push(i);
    }
    return res;
};
