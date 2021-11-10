class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map();
    }

    get(key) {
        let val = this.map.get(key);
        if (val === undefined) return -1;

        this.map.delete(key); // 因为被用过一次，原有位置删除
        this.map.set(key, val); // 放入最下面表示最新使用
        return val;
    }

    put(key, val) {
        if (this.map.has(key)) this.map.delete(key); // 如果有，删除

        this.map.set(key, val); // 放到最下面表示最新使用

        if (this.map.size > this.capacity) {
            // 这里有个知识点
            // map的entries方法，还有keys方法(可以看mdn))，会返回一个迭代器
            // 迭代器调用next也是顺序返回，所以返回第一个的值就是最老的，找到并删除即可
            this.map.delete(this.map.entries().next().value[0])
        }
    }
}

class DListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache2 {
    constructor(capacity) {
        this.capacity = capacity;
        this.hash = {};
        this.count = 0;
        this.dummyHead = new DListNode();
        this.dummyTail = new DListNode();
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }
    get(key) {
        const node = this.hash[key];
        if (!node) return -1;
        this.moveToHead(node);
        return node.value;
    }
    moveToHead(node) {
        this.removeFromList(node);
        this.addToHead(node);
    }
    removeFromList(node) {
        let temp1 = node.prev;
        let temp2 = node.next;
        temp1.next = temp2;
        temp2.prev = temp1;
    }
    addToHead(node) {
        node.prev = this.dummyHead;
        node.next = this.dummyHead.next;
        this.dummyHead.next.prev = node;
        this.dummyHead.next = node;
    }
    put(key, value) {
        let node = this.hash[key]            // 获取链表中的node
        if (node == null) {                  // 不存在于链表，是新数据
            if (this.count == this.capacity) { // 容量已满
                this.removeLRUItem()             // 删除最远一次使用的数据
            }
            let newNode = new ListNode(key, value) // 创建新的节点
            this.hash[key] = newNode          // 存入哈希表
            this.addToHead(newNode)           // 将节点添加到链表头部
            this.count++                      // 缓存数目+1
        } else {                   // 已经存在于链表，老数据
            node.value = value       // 更新value
            this.moveToHead(node)    // 将节点移到链表头部
        }
    }

    removeLRUItem() {               // 删除“老家伙”
        let tail = this.popTail()     // 将它从链表尾部删除
        delete this.hash[tail.key]    // 哈希表中也将它删除
        this.count--                  // 缓存数目-1
    }
    popTail() {                      // 删除链表尾节点
        let tail = this.dummyTail.prev // 通过虚拟尾节点找到它
        this.removeFromList(tail)      // 删除该真实尾节点
        return tail                    // 返回被删除的节点
    }

    // 作者：xiao_ben_zhu
    // 链接：https://leetcode-cn.com/problems/lru-cache/solution/bu-yong-yu-yan-nei-jian-de-map-gua-dang-feng-zhuan/
    //     来源：力扣（LeetCode）
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
}