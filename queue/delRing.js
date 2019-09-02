/**
 * 有一个数组a[1000]存放0--1000;要求每隔二个数删掉一个数，
 * 到末尾时循环至开头继续进行，求最后一个被删掉的数的原始下标位置
 */

const Queue = require("./myqueue")


const delRing = (listArr) => {
  const queue = new Queue()
  for (let i = 0; i < listArr.length; i++) {
    queue.enqueue(listArr[i])
  }

  let index = 0
  while (queue.size() !== 1) {
    index++
    //  取出一个元素, 判断是否需要被删除
    const item = queue.dequeue()
    if(index % 3 !== 0) {
      //  不是被删元素,重新加入队列
      queue.enqueue(item)
    }
  }
  return queue.head()
}

const list = []
for (let i = 0; i < 1000; i++) {
  list.push(i)
}

console.log(delRing(list))