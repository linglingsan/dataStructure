/**
 * 实现calc_exp函数,计算逆波兰表达式
 * ["4", "13", "5", "/", "+"] 等价于(4 + (13 / 5)) = 6
 * ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
 * 等价于((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 */
const Stack = require('./mystack.js')

const calcExp = (exp) => {
  const stack = new Stack()
  const chars = ["+", "-", "*", "/"]
  for (let i = 0; i < exp.length; i++) {
    const item = exp[i];
    if (chars.includes(item)) {
      //  从栈顶取出两个元素
      const s1 = stack.pop()
      const s2 = stack.pop()
      //  拼成表达式计算结果,并取整
      const result = eval(`${s2}${item}${s1}`) | 0
      //  将结果压入栈
      stack.push(result)
    } else {
      stack.push(item)
    }
  }
  //  表达式如果正确, 最终栈里还有一个元素, 为表达式计算结果
  return stack.pop()
}

const exp_1 = ["4", "13", "5", "/", "+"]
const exp_2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
const exp_3 = [ '1', '4', '5', '+', '3', '+', '+', '3', '-', '9', '8', '+', '+' ]

console.log(calcExp(exp_1))
console.log(calcExp(exp_2))
console.log(calcExp(exp_3))