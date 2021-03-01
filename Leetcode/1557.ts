function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    let map: number[] = new Array(n);
    let res: number[] = [];
    // 找到能到达的边的值
    for(let [_, val] of edges){
        map[val] = 1;
    }
     //筛选出不能到达的边即为结果
    for(let i = 0; i < n; i++){
        if(!map[i]) res.push(i);
    }
    return res;
};
