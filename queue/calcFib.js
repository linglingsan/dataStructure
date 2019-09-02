/**
 * 使用队列计算斐波那契数列
 */
const Queue = require("./myqueue")

const calcFib = (num) => {
  const queue = new Queue()
  let index = 0

  queue.enqueue(1)
  queue.enqueue(1)

  while (index < num - 2) {
    index++
    const delItem = queue.dequeue()
    const headItem = queue.head()
    const newItem = delItem + headItem
    queue.enqueue(newItem)
  }

  return queue.tail()
}

console.log(calcFib(3))
console.log(calcFib(4))
console.log(calcFib(5))
console.log(calcFib(6))