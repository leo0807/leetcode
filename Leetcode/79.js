/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (!board.length || !word.length) return false;
    word = word.split('');
    const row = board.length,
        col = board[0].length;
    let visited = Array.from(Array(row), () => new Array(col).fill(0));
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (dfs(board, i, j, word, visited, 0)) {
                return true;
            }
        }
    }
    return false;
};

function dfs(board, row, col, word, visited, count) {
    if (count === word.length) return true;
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[count]) { return false; }
    if (visited[row][col] === 0) {
        visited[row][col] = 1;
        if (dfs(board, row + 1, col, word, visited, count + 1) ||
            dfs(board, row, col + 1, word, visited, count + 1) ||
            dfs(board, row - 1, col, word, visited, count + 1) ||
            dfs(board, row, col - 1, word, visited, count + 1)) {
            return true;
        }
        visited[row][col] = 0;
    }
    return false;
}