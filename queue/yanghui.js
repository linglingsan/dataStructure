const Queue = require("./myqueue")

const printYanghui = (n) => {
  const queue = new Queue()
  queue.enqueue(1)
  for (let i = 1; i <= n; i++) {
    let line = ""
    let pre = 0
    
    for (let j = 0; j < i; j++) {
      const item = queue.dequeue()
      line += item + "  "
      const nextItem = item + pre
      pre = item
      queue.enqueue(nextItem)
    }
    queue.enqueue(1)
    console.log(line)
  }
}

printYanghui(3)