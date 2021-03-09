function findDiagonalOrder(matrix: number[][]): number[] {
    if(!matrix.length) return [];
    const row: number = matrix.length;
    const col: number = matrix[0].length;
    let res: any = new Array(row + col - 1);
    for(let i: number = 0; i < row; i++){
        for(let j: number = 0; j < col; j++){
            if(!res[i + j]) res[i + j] = [];
            res[i + j].push(matrix[i][j]);
        }
    }
    console.log(res);
    for(let i: number = 0; i < (row + col - 1); i += 2){
        if (i%2 === 0) res[i] = res[i].reverse();
    }
    return res.flat();
};