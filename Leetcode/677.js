/**
 * Initialize your data structure here.
 */
var MapSum = function () {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    this.map.set(key, val);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let sum = 0;
    const re = RegExp(`^(${prefix})`, 'g')
    this.map.forEach((value, key) => {
        if (key.match(re)) {
            sum += value;
        }
    });
    return sum;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */


// var MapSum = function() {
//     this.map = {};
// };

// MapSum.prototype.insert = function(key, val) {
//     this.map[key] = val;
// };

// MapSum.prototype.sum = function(prefix) {
//     return Object.keys(this.map)
//         .filter(key=>key.startsWith(prefix))
//         .map(key=>this.map[key])
//         .reduce((total, curr)=>total+curr, 0);
// };