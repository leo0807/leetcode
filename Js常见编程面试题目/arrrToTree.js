const fn = arr => {
    const res = [];
    const map = arr.reduce((res, item) => ((res[item.id] = Object.assign({}, item)), res), {});
    for (const item of Object.values(map)) {
        if (!item.pId) {
            res.push(item);
        } else {
            const parent = map[item.pId];
            parent.child = parent.child || [];
            parent.child.push(item);
        }
    }
    return res;
}

// const arr = [{id: 1}, {id:2, pId: 1}, {id: 3, pId: 2}, {id: 4}, {id:3, pId: 2}, {id: 5, pId: 4}]
// fn(arr) => [{id: 1, child: [{id: 2, pId: 1, child: [{ id: 3, pId: 2}]}]}, {id: 4, child: [{id: 5, pId: 4}]}]