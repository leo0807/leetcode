function dfs(n, m, res, k) {
    if (m === 0) {
        console.log(res.join(' '));
    }
    for (let i = k; k <= n; i++) {
        if (i > m) break;
        res.push(i);
        dfs(n, m - i, res, i + 1);
        res.pop();
    }
}