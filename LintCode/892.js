export class Solution {

    /**
     * alienOrder
     *
     * @param words: a list of words
     * @return: a string which is correct order
     */
    alienOrder(words) {
        // Write your code here
        if (!words.length) return words;

        const inDegree = {};
        const graph = {};
        words.forEach(word => {
            const n = word.length;
            for (let i = 0; i < n; i++) {
                graph[word[i]] = [];
                inDegree[word[i]] = 0;
            }
        });
        const n = words.length;
        for (let i = 1; i < n; i++) {
            const word1 = words[i - 1], word2 = words[i];
            const min = Math.min(word1.length, word2.length);
            for (let j = 0; j < min; j++) {
                const parent = word1[j],
                    child = word2[j];
                if (parent !== child) { // if the two characters are different
                    // put the child into it's parent's list
                    graph[parent].push(child);
                    inDegree[child] += 1; // increment child's inDegree
                    break; // only the first different character between the two words will help us find the order
                }
            }
        }

        const sources = [], chars = Object.keys(inDegree);
        // sources入度表应该使用最小堆来存储和弹出
        // 因为题目要求在有多输出的时候需要按字典序列排
        // 所以source需要被heapify，后续的弹出也应该是heappop
        chars.forEach(key => {
            inDegree[key] === 0 && sources.push(key);
        });
        const sortedOrder = [];
        while (sources.length) {
            const vertex = sources.shift();
            sortedOrder.push(vertex);
            graph[vertex].forEach(child => {
                inDegree[child]--;
                inDegree[child] === 0 && sources.push(child);
            });
        }
        if (chars.length !== sortedOrder.length) return '';
        return sortedOrder.join('');
    }
}