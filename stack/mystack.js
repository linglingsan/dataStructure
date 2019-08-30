/**
 * 使用数组模拟栈
 */
class Stack {
  constructor() {
    this.items = [] //  使用数组保存数据
  }
  //  向栈里压入一个元素
  push(item) {
    this.items.push(item)
  }
  //  将栈顶元素弹出
  pop() {
    return this.items.pop()
  }
  //  返回栈顶元素
  top() {
    return this.items[this.items.length - 1]
  }
  //  判断栈是否为空
  isEmpty() {
    return this.items.length === 0
  }
  //  返回栈的大小
  size() {
    return this.items.length
  }
  //  清空栈
  clear() {
    this.items = []
  }
}

module.exports = Stack