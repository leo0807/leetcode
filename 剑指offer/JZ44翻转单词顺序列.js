function ReverseSentence(str) {
    // write code here
    str = str.split(' ').reverse().join(' ');
    return str;
}
module.exports = {
    ReverseSentence: ReverseSentence
};