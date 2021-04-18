function repeateNumber(str) {
    // let res = ""
    return str.replace(/((\w)\_(\d))/g, function (_, match) {
        return match[0].repeat(Number(match[2]));
    }).replace(/\_/g, "");
}
console.log(repeateNumber("a_2_b_3_c_4"));

function trans(str) {
    // str = str.split('-');
    // for (let i = 1, len = str.length; i < len; i++) {
    //     str[i] = str[i][0].toUpperCase() + str[i].substring(1, str[i].length);
    // }
    // return str.join('');
    return str.replace(/-(\w)/g, function (_, match) {
        return match.toUpperCase()
    })
}

console.log(trans('get-element-by-id'));