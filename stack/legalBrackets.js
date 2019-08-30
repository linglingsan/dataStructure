/**
 * 判断字符串里的括号是否合法
 * "sdf(ds(ew(we)rw)rwqq)qwewe"  合法
 * "(sd(qwqw)sd(sd))"    合法
 * "()()sd()(sd()fw))("  不合法
 */

const Stack = require("./mystack")

//  方式一(栈)
const isLeaglBrackets = (str) => {
  const stack = new Stack()
  for (let i = 0; i < str.length; i++) {
    const item = str[i]
    //  将左括号压入栈
    if (item === "(") {
      stack.push(item)
    } else if (item === ")") {
      //  如果为空, 没有左括号与之抵消
      if (stack.isEmpty()) {
        return false
      } else {
        //  将栈顶元素弹出
        stack.pop()
      }
    }
  }

  return stack.isEmpty()
}

//  方式二(计数)
const isLeaglBrackets2 = (str) => {
  let l = 0; // 左括号数
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c == '(') {
      l++
    } else if (c == ')') {
      if (l > 0) {
        l--
      } else {
        return false;
      }
    }
  }

  return l == 0
}

console.log(isLeaglBrackets("()()))"))
console.log(isLeaglBrackets("sdf(ds(ew(we)rw)rwqq)qwewe"))
console.log(isLeaglBrackets("()()sd()(sd()fw))("))