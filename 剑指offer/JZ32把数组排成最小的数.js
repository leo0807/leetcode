function PrintMinNumber(numbers) {
    // write code here
    numbers.sort((a, b) => {
        if (`${a}${b}` < `${b}${a}`) {
            return -1;
        } else return 1;
    });
    return numbers.join('');
}
module.exports = {
    PrintMinNumber: PrintMinNumber
};