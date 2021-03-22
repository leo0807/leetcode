/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const row = grid.length,
        col = grid[0].length;
    let res = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === "1") {
                res++;
                dfs(grid, i, j, row, col);
            }
        }
    }
    return res;
};

function dfs(grid, i, j, row, col) {
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === "0") return;
    grid[i][j] = "0";
    dfs(grid, i - 1, j, row, col);
    dfs(grid, i, j - 1, row, col);
    dfs(grid, i + 1, j, row, col);
    dfs(grid, i, j + 1, row, col);
    return;
}
