/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const sortedOrder = [];
    if (numCourses < 1) return sortedOrder;
    const inDrgree = Array(numCourses).fill(0);
    const graph = Array(numCourses).fill(0).map(() => Array());

    prerequisites.forEach(item => {
        const child = item[0], parent = item[1];
        graph[parent].push(child);
        inDrgree[child]++;
    })
    const sources = [];
    for (let i = 0; i < inDrgree.length; i++) {
        inDrgree[i] === 0 && sources.push(i);
    }
    while (sources.length) {
        const vertex = sources.shift();
        sortedOrder.push(vertex);
        graph[vertex].forEach(child => {
            inDrgree[child]--;
            inDrgree[child] === 0 && sources.push(child);
        })
    }
    if (sortedOrder.length !== numCourses) return [];
    return sortedOrder;
};