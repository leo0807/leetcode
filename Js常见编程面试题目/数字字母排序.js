let str = "fed123ab456c";

function mixedSorted(str) {
    return str.split('').sort((a, b) => {
        if (a.charCodeAt() > b.charCodeAt()) {
            return 1;
        } else {
            return -1;
        }
    }).join("");
}

console.log(mixedSorted(str));