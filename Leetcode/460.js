class LFUCache {
  constructor(capacity) {
    this.size = capacity
    this.valuesMap = new Map()  // key, value
    this.timesMap = new Map()   // key, 次数
    this.useMap = new Map()     // 次数 set{key}
    this.min = 0
  }
  get(key) {
    if (this.valuesMap.has(key)) {
      this.increaseTimes(key)
      return this.valuesMap.get(key)
    }
    return -1
  }
  put(key, value) {
    if (this.size === 0) return
    if (this.valuesMap.has(key)) {             // 1. 修改
      this.valuesMap.set(key, value)
      this.increaseTimes(key)
    } else {                                 // 2. 新增
      if (this.size === this.valuesMap.size) { // 2.1 当要超出, 先删除最不常用的
        let minSet = this.useMap.get(this.min)
        let minKey = minSet.keys().next().value
        minSet.delete(minKey)
        this.valuesMap.delete(minKey)
        this.timesMap.delete(minKey)
      }
      // 2.2 新增属性, 更新最小使用次数
      this.valuesMap.set(key, value)
      let useSet = this.useMap.get(1)
      if (!useSet) {
        useSet = new Set()
        this.useMap.set(1, useSet)
      }
      this.timesMap.set(key, 1)
      useSet.add(key)
      this.min = 1
    }
  }
  increaseTimes(key) { // 次数加1
    let times = this.timesMap.get(key)
    let useSet = this.useMap.get(times)
    if (this.min === times && useSet.size === 1) {
      this.min += 1
    }
    useSet.delete(key)
    this.timesMap.set(key, times + 1)
    useSet = this.useMap.get(times + 1)
    if (!useSet) {
      useSet = new Set()
      this.useMap.set(times + 1, useSet)
    }
    useSet.add(key)
  }
}

作者：shetia
链接：https://leetcode-cn.com/problems/lfu-cache/solution/liang-ge-map-by-shetia/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。