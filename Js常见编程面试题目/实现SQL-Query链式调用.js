// 使用JS实现一个 query 方法，返回一个新的数组，query 方法内部有 过滤、排序、分组 等操作，并且支持链式调用，调用最终的 execute 方法返回结果：
// 如，const result = query(list)
//   .where(item => item.age > 18)
//   .sortBy('id')
//   .groupBy('name')
//   .execute();

// console.log(result);
class Query {
  constructor(list) {
    this.list = list;
    this.filters = [];
    this.sortKeys = [];
    this.groupKeys = [];
  }

  where(filterFunc) {
    this.filters.push(filterFunc);
    return this;
  }
  sortBy(...sortKey) {
    this.sortKeys.push(...sortKey);
    return this;
  }
  groupBy(...groupByKey) {
    this.groupKeys.push(...groupByKey);
    return this;
  }
  execute() {
    try {
      let result = this.list;

      this.filters.forEach(filterFunc => {
        result = result.filter(filterFunc);
      });

      if (this.sortKeys.length) {
        result.sort((a, b) => {
          for (let key of this.sortKeys) {
            if (a[key] < b[key]) {
              return -1;
            }
            if (a[key] > b[key]) {
              return 1;
            }
          }
          return 0;
        });
      }
      const groupByRecursively = (data, keys) => {
        if (keys.length === 0) return data;
        const key = keys[0];
        // const restKeys = keys.slice(1);
        return data.reduce((acc, item) => {
          const keyValue = item[key];
          if (!acc[keyValue]) {
            acc[keyValue] = [];
          }
          acc[keyValue].push(item);
          return acc;
        }, {});
      };

      if (this.groupKeys && this.groupKeys.length > 0) {
        result = groupByRecursively(result, this.groupKeys);
      }

      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

const data = [
  { id: 1, name: 'Alice', age: 25, country: 'US' },
  { id: 2, name: 'Bob', age: 20, country: 'US' },
  { id: 3, name: 'Alice', age: 22, country: 'UK' },
  { id: 4, name: 'Diana', age: 30, country: 'UK' }
];

const result = new Query(data)
  .where(item => item.age > 18)
  .sortBy('name', 'id')
  .groupBy('country', 'age')
  .execute();

console.log(result);