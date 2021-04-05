function toMoneyFormat(num) {
    let [intNum, decimal] = num.toFixed(2).split('.')
    console.log(intNum, decimal, typeof intNum);
    return intNum.split('').reverse().reduce((total, curr, index) => {
        total.push(curr);
        if ((index + 1) % 3 === 0 && index !== intNum.length - 1) total.push(',');
        return total;
    }, []).reverse().join('') + '.' + decimal;

}
console.log(toMoneyFormat(112234.576));