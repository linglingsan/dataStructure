/**
 * 中缀表达式转换成后缀表达式
 */

const Stack = require("./mystack")

//  优先级
const priorityMap = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2
}

const infixExp2postfixExp = (exp) => {
  const stack = new Stack()
  const chars = ["+", "-", "*", "/"]
  let postfixList = []

  for (let i = 0; i < exp.length; i++) {
    const item = exp[i];

    //  如果是数字直接放到postfixList
    if (!isNaN(item)) {
      postfixList.push(item)
      //  遇到左括号入栈
    } else if (item === "(") {
      stack.push(item)
      //  遇到右括号把栈顶元素弹出
    } else if (item === ")") {
      while(stack.top() !== "(") {
        postfixList.push(stack.pop())
      }
      stack.pop(item)
    } else {
      //  遇到运算符, 将栈顶弹出, 直到栈顶的运算符优先级小于当前运算符优先级
      while (!stack.isEmpty() && chars.includes(item) && priorityMap[stack.top()] >= priorityMap[item]) {
        postfixList.push(stack.pop())
      }
      //  将当前元素压入栈
      stack.push(item)
    }

  }
  //  循环结束, 栈里可能还有元素
  while (!stack.isEmpty()) {
    postfixList.push(stack.pop())
  }

  return postfixList
}

// 12+3
console.log(infixExp2postfixExp(["12", "+", "3"]))

// 2-3+2
console.log(infixExp2postfixExp(["2", "-", "3", "+", "2"]))

// (1+(4+5+3)-3)+(9+8)
console.log(infixExp2postfixExp(["(","1","+","(","4","+","5","+","3",")","-","3",")","+","(","9","+","8",")"]))

// (1+(4+5+3)/4-3)+(6+8)*3
console.log(infixExp2postfixExp(['(', '1', '+', '(', '4', '+', '5', '+', '3', ')', '/', '4', '-', '3', ')', '+', '(', '6', '+', '8', ')', '*', '3']))
