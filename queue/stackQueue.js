/**
 * 使用栈模拟队列
 */
const Stack = require("../stack/mystack")

class StackQueue {
  constructor() {
    this.stack = new Stack()    //  存储数据
    this.tem = new Stack()      //  缓存数据
  }

  //  将数据存储到另一个空栈
  getTemStack() {
    while (this.stack.size() > 0) {
      this.tem.push(this.stack.pop())
    }
  }
  //  还原栈
  getStack() {
    while (this.tem.size() > 0) {
      this.stack.push(this.tem.pop())
    }
  }

  enqueue(item) {
    this.stack.push(item)
  }
  dequeue() {
    this.getTemStack()
    const first = this.tem.pop()
    this.getStack()
    return first
  }
  head() {
    this.getTemStack()
    const head = this.tem.top()
    this.getStack()
    return head
  }
  tail() {
    return this.stack.top()
  }
  size() {
    return this.stack.size()
  }
  isEmpty() {
    return this.stack.isEmpty()
  }
  clear() {
    this.stack.clear()
  }
}

module.exports = StackQueue