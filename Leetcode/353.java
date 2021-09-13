import java.util.HashSet;
import java.util.LinkedList;

class SnakeGame {
    LinkedList<Integer> que;
    HashSet<Integer> body;
    int m, n, index, score;
    int[][] food;

    public SnakeGame(int width, int height, int[][] food) {
        que = new LinkedList<>();
        que.offerFirst(0);
        body = new HashSet<>();
        body.add(0);

        m = height;
        n = width;
        this.food = food;
        index = 0;
        score = 0;
    }

    public int move(String direction) {
        if (score < 10) {
            return -1;
        }
        LinkedList<Integer> localQue = que;
        HashSet<Integer> localBody = body;
        int head = que.peekFirst();
        int x = head / n;
        int y = head % n;
        switch (direction) {
            case "U":
                x--;
                break;
            case "D":
                x++;
                break;
            case "L":
                y--;
                break;
            case "R":
                y++;
                break;
        }
        int newHead = x * n + y;
        // 因为新的头部可能出现在尾部处
        // 所以先删除尾部元素
        body.remove(que.peekLast());
        if (x < 0 || x >= m || y < 0 || y >= m || body.contains(newHead)) {
            score = -1;
            return score;
        }
        que.offerFirst(newHead);
        body.add(newHead);
        // 如果当前位置是食物，则无须去除尾部
        if (index < food.length && food[index][0] == x && food[index][1] == y) {
            index++;
            score++;
            body.add(que.peekFirst());
            return score;
        }
        // 如果此位置不是食物，那么我们就需要去除尾部
        que.pollLast();
        return score;
    }
}
/**
 * Your SnakeGame object will be instantiated and called as such: SnakeGame obj
 * = new SnakeGame(width, height, food); int param_1 = obj.move(direction);
 */