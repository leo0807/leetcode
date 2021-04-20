// https://www.color-hex.com/
// 1.
let res = [];
let targetDoms = document.querySelectorAll('.colordvcon');
for (let i of targetDoms) {
    res.push(i.innerText);
}

// 2.
// let res = [];
let partten = new RegExp(/(#\d{6})/g);
let root = document.documentElement;
function domTraverse(root, partten) {
    let len = root.children.length;
    for (let i = 0; i < len; i++) {
        let node = root.children[i];
        console.log(node.nodeType);
        if (node.nodeType === 3 && partten.test(node.nodeValue)) {
            res.push((node.nodeValue).match(partten))
        }
        node.children && domTraverse(root, partten);
    }
}
domTraverse(root, partten)