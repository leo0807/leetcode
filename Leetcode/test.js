function findWhetherExistsPath(n, graph, start, end) {
    // write code here
    let map = new Map(),
        endMap = new Map();
    const len = graph.length;
    for (let i of graph) {
        map.set(i[0], map.has(i[0]) ? map.get(i[0]).concat(i[1]) : [i[1]]);
    }

    let path = [start];
    while (true) {
        let node = path.shift();
        let tmp = map.get(node);
        if (Array.isArray(tmp)) {
            if (tmp.includes(end)) return true;
            for (let i of tmp) {
                if (path.includes(i)) return false;
                path.push(i);
            }
        } else {
            if (tmp === end) return true;
            if (path.includes(tmp)) return false;
            path.push(tmp);
        }

    }
    console.log(map);
}

function bfs() {

}

let n = 3, graph = [[0, 1], [0, 2], [1, 2], [1, 2], [0, 3]], start = 0, end = 2;

// console.log(findWhetherExistsPath(n, graph, start, end));


function getLinkNodeIdList(nodeList) {
    // write code here
    let res = [];
    let root = nodeList[0];
    dfs(nodeList, root);
    function dfs(nodeList, root) {
        if (!nodeList.length || !root.length) return;
        for (let j = 0; j < root.lengt; j++) {
            for (let i = 0; i < nodeList.length; i++) {
                if (nodeList[i].includes(root[j])) {
                    res.push(root[j]);
                    dfs(nodeList.slice(i), root.slice(j));
                }
            }
        }
    }
    console.log(res);
    return res;
}


let nums = [[1, 2, 3], [2, 4], [3], [4]];
console.log();