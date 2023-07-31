class Solution {
    public boolean find(char[][] board, boolean[][] matrix, int i, int j, int row, int col, String word){
        if (word.length() == 0) return true;
        if (i < 0 || j < 0 || i >= row || j >= col || matrix[i][j] == true || board[i][j] != word.charAt(0)){
            return false; 
        }
        matrix[i][j] = true;
        String temp = word.substring(1);
        if (
            find(board, matrix, i + 1, j, row, col, temp) ||
            find(board, matrix, i - 1, j, row, col, temp) ||
            find(board, matrix, i, j + 1, row, col, temp) ||
            find(board, matrix, i, j - 1, row, col, temp) 
        ){
            return true;
        }
        matrix[i][j] = false;
        return false;
    }

    public boolean exist(char[][] board, String word) {
        int row = board.length, col = board[0].length;
        
        boolean[][] matrix = new boolean[row][col];
        for (int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
                if (board[i][j] == word.charAt(0)){
                    if(find(board, matrix, i, j, row, col, word)){
                        return true;
                    }
                }
            } 
        }
        return false;
    }
    
}