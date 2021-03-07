function numSpecial(mat: number[][]): number {
    if(!mat.length) return 0;
    const row = mat.length;
    const col = mat[0].length;
    let rowS: number[] = new Array(row).fill(0),
        colS: number[] = new Array(col).fill(0);
    let res: number = 0;
    for(let i: number = 0; i < row; i++){
        for(let j: number = 0; j < col; j++){
            if(mat[i][j]){
                rowS[i]++;
                colS[j]++;
            }
        }
    }
    
    for(let i: number = 0; i < row; i++){
        for(let j: number = 0; j < col; j++){
            if (mat[i][j] && rowS[i] == 1 && colS[j] == 1)
                ++res;
        }
    }
    return res;
};
