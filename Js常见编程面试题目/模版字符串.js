function templateStr(template, data) {
    for (let i in data) {
        let index = template.indexOf(i);
        if (index > -1 && template.slice(index - 2, index) === '${'
            && template[index + 1 + i.length] === '}') {
            template.replace()
        }
    }
}

let temp = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data1 = {
    name: '姓名',
    age: 18
}
function template(pattern, data) {
    return pattern.replace(/\{\{(\w+)\}\}/g, function (_, key) {
        // console.log("match", match, "key", key, "index", index);
        return data[key] || "";
    })
}


console.log(template(temp, data1));