function deleteDuplicate(str) {
    str = str.split('');
    let i = 0;
    while (i < str.length) {
        if (str[i] === 'b') {
            str.splice(i, 1);
        } else if (str[i] === 'a' && str[i + 1] === 'c') {
            str.splice(i, 2);
            i--;
        } else {
            i++;
        }
    }
    return str.join('');
}
console.log(deleteDuplicate('aaaaacbbacc'));