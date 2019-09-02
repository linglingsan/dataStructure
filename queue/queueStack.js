/**
 * 使用队列模拟栈
 */

const Queue = require("./myqueue")

class QueueStack {
  constructor() {
    this.items = []
    this.queue1 = new Queue()
    this.queue2 = new Queue()
    this.emptyQueue = null
    this.sourceQueue = null
  }

  initQueue() {
    if (this.queue1.isEmpty() && this.queue2.isEmpty()) {
      this.sourceQueue = this.queue1
      this.emptyQueue = this.queue2
    } else if (this.queue1.isEmpty()) {
      this.sourceQueue = this.queue2
      this.emptyQueue = this.queue1
    } else {
      this.sourceQueue = this.queue1
      this.emptyQueue = this.queue2
    }
  }

  push(item) {
    this.initQueue()
    this.sourceQueue.enqueue(item)
  }

  pop() {
    this.initQueue()
    while (this.sourceQueue.size() > 1) {
      this.emptyQueue.enqueue(this.sourceQueue.dequeue())
    }
    return this.sourceQueue.dequeue()
  }

  top() {
    this.initQueue()
    return this.sourceQueue.tail()
  }
  isEmpty() {
    this.initQueue()
    return this.sourceQueue.isEmpty()
  }
  size() {
    this.initQueue()
    return this.sourceQueue.size()
  }
  clear() {
    this.initQueue()
    while (!this.sourceQueue.isEmpty()) {
      this.sourceQueue.dequeue()
    }
  }
}

module.exports = QueueStack