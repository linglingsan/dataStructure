/**
 * 使用数组模拟队列
 */
class Queue {
  constructor() {
    this.items = []   //  存储数据
  }

  //  向队列尾部添加元素
  enqueue(item) {
    this.items.push(item)
  }
  //  删除队列头部元素
  dequeue() {
    return this.items.shift()
  }
  //  返回队列头部元素
  head() {
    return this.items[0]
  }
  //  返回队列尾部元素
  tail() {
    return this.items[items.length -1]
  }
  //  返回队列大小
  size() {
    return this.items.length
  }
  //  清空队列
  clear() {
    this.items = []
  }
  //  判断队列是否为空
  isEmpty() {
    return this.items.length === 0
  }
}

module.exports = Queue