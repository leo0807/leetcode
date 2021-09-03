/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const n = isConnected.length;
    let visited = new Array(n).fill(false), count = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(isConnected, visited, i);
            count++;
        }
    }
    return count;
};

function dfs(matrix, visited, index) {
    for (let row = 0; row < matrix.length; row++) {
        if (matrix[index][row] === 1 && !visited[row]) {
            visited[index] = true;
            dfs(matrix, visited, row);
        }
    }
}