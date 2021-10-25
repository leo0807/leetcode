class MaxHeap {
    constructor(heap) {
        this.heap = heap;
        this.heapSize = heap.length;
        this.buildMaxHeap();
    }
    // 构建最大堆
    buildMaxHeap() {
        for (let i = Math.floor(this.heapSize / 2) - 1; i >= 0; i--) {
            this.maxHeapify(i);
        }
    }
    // 以i为根节点
    maxHeapify(index) {
        const left = 2 * index + 1,
            right = 2 * index + 2;
        let largest = index;
        if (left < this.heapSize && this.heap[left] > this.heap[largest]) largest = left;
        if (right < this.heapSize && this.heap[right] > this.heap[largest]) largest = right;
        if (largest !== index) {
            this.swap(index, largest);
            this.maxHeapify(largest);
        }
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    insert(num) {
        this.heap.push(num);
        this.heap.heapSize = this.heap.length;
        const index = this.heap.heapSize - 1;
        while (index !== -1) {
            index = this.shiftUp(index);
        }
        console.log(this.heap);
    }

    // 删除堆顶元素
    pop() {
        this.swap(0, this.heapSize - 1);
        this.heap.pop();
        this.heapSize = this.heap.length;
        let index = 0;
        while (true) {
            let temp = this.shiftDown(index);
            if (temp === index) break;
            else index = temp;
        }
    }
    // 堆排序
    heapSort() {
        while (this.heapSize > 1) {
            this.swap(0, this.heapSize - 1);
            this.heapSize -= 1;
            let index = 0;
            while (true) {
                let temp = this.shiftDown(index);
                if (temp === index) break;
                else index = temp;
            }
        }
        this.heapSize = this.heap.length;
    }
    // 上浮操作 - 将当前节点与父节点进行比较，如果该节点值大于父节点值，则进行交换。
    shiftUp(index) {
        const parent = Math.ceil(index / 2) - 1;
        if (this.heap[index] > this.heap[parent] && parent >= 0) {
            this.swap(index, parent);
            return parent;
        }
        return -1;
    }
    // 下沉操作 - 将当前节点与左右子节点进行比较，如果该节点值不是最大，则进行交换
    shiftDown(index) {
        let left = Math.floor(index * 2) + 1;
        let right = left + 1;
        let largest = index;
        if (left < this.heapSize && this.heap[left] > this.heap[largest]) largest = left;
        if (right < this.heapSize && this.heap[right] > this.heap[largest]) largest = right;
        if (largest !== index) {
            this.swap(index, largest);
        }
        return largest;
    }
}