/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const row = grid.length,
        col = grid[0].length;
    let max = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, dfs(grid, i, j, row, col));
            }
        }
    }

    return max;
};


function dfs(grid, i, j, row, col) {
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === 0) {
        return 0;
    }
    let count = 1;
    grid[i][j] = 0;
    count += dfs(grid, i - 1, j, row, col);
    count += dfs(grid, i, j - 1, row, col);
    count += dfs(grid, i + 1, j, row, col);
    count += dfs(grid, i, j + 1, row, col);

    return count;
}