function processData(input) {
    //Enter your code here
    const arr = input.match(/(?<=<)(\w+)/g);
    console.log(Array.from(new Set(arr)).sort().join(";"));
}