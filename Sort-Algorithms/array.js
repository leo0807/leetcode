function ArrayList() {
    this.array = [];

    ArrayList.prototype.insert = function (item) {
        this.array.push(item);
    }
    ArrayList.prototype.toString = function () {
        return this.array.join('-');
    }

    ArrayList.prototype.swap = function (m, n) {
        var temp = this.array[m];
        this.array[m] = this.array[n];
        this.array[n] = temp;
    }
    // 实现排序算法

    // 冒泡排序 Bubble Sort
    ArrayList.prototype.bubbleSort = function () {
        var length = this.array.length;
        // 两两比较 每次最大的值放在最右边
        // 第一次 j = length - 1， 比较到倒数第一个位置
        // 第一次 j = length - 2， 比较到倒数第二个位置
        for (var j = length - 1; j >= 0; j--){
            for (var i = 0; i < length - 1; i++){
                if (this.array[i] > this.array[i + 1]) {
                    this.swap(i, i + 1);  
                }
            }
        }
        // 效率 N^2/2 - N/2 => O(n^2)
    }
    // 选择排序
    // 对冒泡排序进行优化 交换次数由O(n^2) 变成 O(n)
    // 但是比较的次数依然是O(n^2)
    // 方法 选择一个最小值和第一个索引位进行交换，此时第一个索引位置为最小值
    // 剩下的元素一次类推

    ArrayList.prototype.selectionSort = function () {
        var length = this.array.length;
        for (var j = 0; j < length - 1; j++){
            var min = j;
            // 从后一位开始， 从0位置开始取数据
            for (var i = min + 1; i < length; i++){
                if (this.array[min] > this.array[i]) {
                    min = i
                }
            }
            this.swap(min, j);
        }
    }
    // 比较次数虽然和冒泡排序一样 但是N项只需要交换N-1次

    // 插入排序是简单排序中效率最好的
    ArrayList.prototype.insertionSort = function () {
        var length = this.array.length;
        // 从第一个位置获取数据，向前面局部有序进行插入
        for (var j = 1; j < length; j++){

            var temp = this.array[j];
            // 内层循环，获取i位置的元素，和前面的元素依次比较
            while (this.array[j - 1] > temp && j > 0) {
                this.array[j] = this.array[j - 1];
                j--;
            }
            this.array[j] = temp;
        }
    }
    // 效率 最多比较次数 N（N-1）/2
    // 平均 N（N-1）/4
    // 相对于选择排序和其他排序 比较次数少一半
    // 复制次数（移动次数）最多N（N-1）/2 平均N（N-1）/4


    // 希尔排序
    // 插入排序的改进版 
    ArrayList.prototype.shellSort = function () {
        var length = this.array.length;
        // 初始化增量
        var gap = Math.floor(length / 2);
        // 初始化gap增量
        while (gap >= 1) {
            // while外循环 gap不断减小
            for (var i = gap; i < length; i++) {
                var temp = this.array[i];
                var j = i;
                while (this.array[j - gap] > temp && j > gap - 1) {
                    this.array[j] = this.array[j - gap];
                    j -= gap;
                }
                // 以gap作为间隔进行分组，对分组进行插入排序
                this.array[j] = temp;
            }
                // 将J位置元赋值temp
                gap = Math.floor(gap / 2); 
        }
    }
    // 效率最差为O(N^2) 通常情况下都要比O(N^2)要好

    // 快速排序
    // 大多数情况下是最好的
    // 选择枢纽pivot
    ArrayList.prototype.pivot = function (left, right) {
        // 找到中间的位置
        var center = Math.floor((left + right) / 2);
        // 判断大小 进行交换
        if (this.array[left] > this.array[center]) {
            this.swap(left, center)
        }
        if (this.array[center] > this.array[right]) {
            this.swap(center, right)
        }
        if (this.array[left] > this.array[right]) {
            this.swap(left, right)
        }
        this.swap(center, right - 1);
        return this.array[right - 1];
    }

    ArrayList.prototype.quickSort = function () {
        this.quick(0, this.array.length - 1);
    }

    ArrayList.prototype.quick = function (left, right) {
        // 结束条件
        if (left >= right) return;
        var pivot = this.pivot(left, right);
        // 定义变量 用于记录当前位置
        var i = left,
            j = right - 1;
        
        // 开始进行交换 
        while (true) {
            while(this.array[i] < pivot) {i++}
            while(this.array[j] >= pivot) {j--}
            if (i < j) {
                this.swap(i, j);
            } else {
                break;
            }
        }

        // 将枢纽放在正确的位置 i的位置
        // this.swap(i, right - 1)

        // Divide and conquer
        this.quick(left, i - 1);
        this.quick(i + 1, right);
        // O(N *log^N)
    }
}
// var list = new ArrayList();

// list.insert(32);
// list.insert(4);
// list.insert(231);
// list.insert(42);
// list.insert(2);
// list.insert(6);
// list.insert(6);
// list.insert(7);
// list.insert(11);
// console.log(list);
// list.bubbleSort();
// list.selectionSort();
// list.insertionSort();
// list.shellSort();

// list.quickSort();
let tmp = [32,4,231,42,2,6,6,7,11];
// let res = list.mergeSort(tmp);
// console.log(res);
// console.log(list.toString());


    // 计数排序
    // 适合量大范围小 即重复数值多的情况
    // 时间复杂度和空间复杂度是O(n+k)
    // （1）找出待排序的数组中最大和最小的元素
    // （2）统计数组中每个值为i的元素出现的次数，存入数组C的第i项
    // （3）对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）
    // （4）反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1
    // 归并排序
    const mergeSort = function(arr){
        if(arr.__proto__ !== []) return;
        let length = arr.length;
        if(length < 2) return arr;
        const middle = Math.floor(length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        return merge(mergeSort(left), mergeSort(right));
    }

    const merge = function(left, right){
        let result = [];

        while(left.length && right.length){
            if(left[0] <= right[0]){
                result.push(left.shift());
            }else{
                result.push(right.shift());
            }
        }
        while(left.length) result.push(left.shif());
        while(right.length) result.push(right.shif());
        return result; 
    }

// 最优时间复杂度：O(n*log(n))
// 最坏时间复杂度：O(n*log(n))
// 平均时间复杂度：O(n*log(n))
// 最坏空间复杂度：总共O(n)，辅助O(n)；当使用linked list，辅助空间为O(1).
    function countSort(arr){
        let maxValue = -Infinity,
            minValue = +Infinity;
        const length = arr.length;
        for(let i = 0; i < length; i++){
            maxValue = maxValue > arr[i]? maxValue: arr[i];
            minValue = minValue < arr[i]? minValue: arr[i];
        }

        let bucket = new Array(maxValue - minValue + 1);
        for(let i = 0; i < length; i++){
            if(!bucket[arr[i]]) bucket[arr[i]] = 0;
            bucket[arr[i]]++;
        }
        let index = 0;
        for(let i = 0, bucketLen = bucket.length; i < bucketLen; i++ ){
            while(bucket[i] > 0){
                arr[index++] = i;
                bucket[i]--;
            }
        }
        return arr;
    }

    let res1 = countSort(tmp);
    console.log(res1);



//  桶排序
function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
      return arr;
    }

    var i;
    var minValue = arr[0];
    var maxValue = arr[0];
    for (i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
          minValue = arr[i];                // 输入数据的最小值
      } else if (arr[i] > maxValue) {
          maxValue = arr[i];                // 输入数据的最大值
      }
    }

    //桶的初始化
    var DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;  
    var buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        mergeSort(buckets[i]);                      // 对每个桶进行排序
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);                      
        }
    }

    return arr;
}

// console.log(typeof tmp.__proto__ );
let res = bucketSort(tmp);
console.log(res);