class Heap {
    constructor() {
        this.heap = []
    }
    // 获取堆
    getHeap() {
        return this.heap
    }
    // 获取堆顶元素
    getHeapTop() {
        return this.heap[0]
    }
    // 获取元素父元素下标
    getParentIndex(i) {
        return (i - 1) >> 1
    }
    // 获取元素左孩子下标
    getLeftIndex(index) {
        return index * 2 + 1
    }
    // 获取元素的右孩子下标
    getRightIndex(index) {
        return index * 2 + 2
    }
    // 交换值
    swap(i1, i2) {
        const temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    // 向堆中插入元素
    insert(n) {
        this.heap.push(n)
        this.shiftUp(this.heap.length - 1)
    }
    // 删除堆顶
    pop() {
        this.swap(0, this.heap.length - 1)
        const value = this.heap.pop()
        this.shiftDown(0)
        return value
    }
}

class MinHeap extends Heap {
    constructor() {
        super()
    }
    // 向上调整
    shiftUp(index) {
        if (index === 0) return
        const parentIndex = this.getParentIndex(index)
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(index, parentIndex)
            this.shiftUp(parentIndex)
        }
    }
    // 向下调整
    shiftDown(index) {
        const left = this.getLeftIndex(index)
        const right = this.getRightIndex(index)
        if (this.heap[index] > this.heap[left]) {
            this.swap(index, left)
            this.shiftDown(left)
        }
        if (this.heap[index] > this.heap[right]) {
            this.swap(index, right)
            this.shiftDown(right)
        }
    }
}

class MaxHeap extends Heap {
    constructor() {
        super()
    }
    // 向上调整
    shiftUp(index) {
        if (index === 0) return
        const parentIndex = this.getParentIndex(index)
        if (this.heap[parentIndex] < this.heap[index]) {
            this.swap(index, parentIndex)
            this.shiftUp(parentIndex)
        }
    }
    // 向下调整
    shiftDown(index) {
        const left = this.getLeftIndex(index)
        const right = this.getRightIndex(index)
        if (this.heap[index] < this.heap[left]) {
            this.swap(index, left)
            this.shiftDown(left)
        }
        if (this.heap[index] < this.heap[right]) {
            this.swap(index, right)
            this.shiftDown(right)
        }
    }
}



var MedianFinder = function () {
    this.maxHeap = new MaxHeap()
    this.minHeap = new MinHeap()
    this.len = 0
}


MedianFinder.prototype.addNum = function (num) {
    this.len++
    if (this.len === 1) {
        this.maxHeap.insert(num)
        return
    }
    const maxTop = this.maxHeap.getHeapTop()
    // 大顶堆堆顶元素比num小，将num插入小顶堆
    if (maxTop < num) {
        this.minHeap.insert(num)
    } else {
        this.maxHeap.insert(num)
    }
    const maxHeapLen = this.maxHeap.getHeap().length
    const minHeapLen = this.minHeap.getHeap().length
    // console.log('maxLen', maxHeapLen, 'minLen', minHeapLen)
    if (maxHeapLen - minHeapLen === 2) {
        // maxHeap => minHeap
        const maxTop = this.maxHeap.pop()
        this.minHeap.insert(maxTop)
    }
    if (minHeapLen > maxHeapLen) {
        // minHeap => minHeap
        const minTop = this.minHeap.pop()
        this.maxHeap.insert(minTop)
    }
}


MedianFinder.prototype.findMedian = function () {
    const minTop = this.minHeap.getHeapTop()
    const maxTop = this.maxHeap.getHeapTop()
    // console.log('maxHeap', this.maxHeap.getHeap())
    // console.log('minHeap', this.minHeap.getHeap())
    if (this.len % 2 === 0) {
        return (minTop + maxTop) / 2
    } else {
        return maxTop
    }
}

