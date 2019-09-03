const Node = require("./createNode")

class LinkList {
  constructor() {
    this.length = 0   //  长度
    this.head = null  //  头节点
    this.tail = null  //  尾节点
  }
  //  添加元素
  append(data) {
    const node = new Node(data)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length += 1
    return true
  }
  //  插入节点
  insert(index, data) {
    //  最后一个节点,直接添加
    if (index === this.length) {
      return this.append(data)
    //  超出范围  
    } else if (index > this.length || index < 0) {
      return false
    } else {
      const newNode = new Node(data)
      //  第一节点
      if (index === 0) {
        newNode.next = this.head
        this.head = newNode
      } else {
        let insertIndex = 1
        let curNode = this.head
        //  找出将要插入的前一个节点
        while (insertIndex < index) {
          curNode = curNode.next
          insertIndex++
        }
        const nextNode = curNode.next
        curNode.next = newNode
        newNode.next = nextNode
      }
      this.length += 1
      return true
    }
  }
  //  根据索引删除节点
  remove(index) {
    if (index >= this.length || index < 0) {
      return null
    } else {
      let delNode = null
      //  第一个节点
      if (index === 0) {
        delNode = this.head
        this.head = this.head.next
      } else {
        let delIndex = 0
        let preNode = null
        let curNode = this.head
        //  找出将要删除的上一个节点
        while (delIndex < index) {
          delIndex++
          preNode = curNode
          curNode = curNode.next
        }
        delNode = curNode
        preNode.next = curNode.next
      }
      this.length -= 1
      delNode.next = null
      return delNode.data
    }
  }
  //  删除头节点
  removeHead() {
    return this.remove(0)
  }
  //  删除尾节点
  removeTail() {
    return this.remove(this.length - 1)
  }
  //  根据索取获取节点
  get(index) {
    if (index >= this.length || index < 0) {
      return null
    }
    let nodeIndex = 0
    let curNode = this.head
    while (nodeIndex < index) {
      nodeIndex++
      curNode = curNode.next
    }
    return curNode.data
  }
  //  获取头节点
  head() {
    return this.get(0)
  }
  //  获取尾节点
  tail() {
    return this.get(this.length - 1)
  }
  //  获取节点索引
  indexOf(data) {
    let index = -1
    let curNode = this.head
   
    while (curNode) {
      index++
      if(curNode.data === data) {
        return index
      }else{
        curNode = curNode.next
      }
    }
    return -1
  }
  //  打印
  print() {
    let curNode = this.head
    let link = ""
    while (curNode) {
      link += `${curNode.data} -> `
      curNode = curNode.next
    }
    link += "null"
    console.log(link)
    console.log(`长度为${this.length}`)
  }
  //  返回链表大小
  length() {
    return this.length
  }
  //  判断链表是否为空
  isEmpty() {
    return this.length === 0
  }
  //  清空链表
  clear() {
    this.head = null
    this.tail = null
    this.length = 0
  }
}

const link = new LinkList()
link.append(1)
link.append(2)
link.append(3)
link.print()
link.insert(1, 5)
link.print()
link.insert(0, 6)
link.print()
link.remove(2)
link.print()
console.log(link.get(2))
console.log(link.indexOf(6))