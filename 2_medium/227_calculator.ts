/* 
Basic Calculator II
Leetcode medium - https://leetcode.com/problems/basic-calculator-ii/

*/
// O(1) space
function calculate(s: string): number {
  let [prev, curr, output] = [0, 0, 0]

  let i = 0
  let operator = "+"

  while (i < s.length) {
    if (!isNaN(parseInt(s[i]))) {
      while (!isNaN(parseInt(s[i])) && i < s.length) {
        curr = curr * 10 + +s[i]
        i++
      }
      i--
      if (operator === "+") {
        output += curr
        prev = curr
      } else if (operator === "-") {
        output -= curr
        prev = -curr
      } else if (operator === "/") {
        output -= prev
        output += Math.trunc(prev / curr)
        prev = Math.trunc(prev / curr)
      } else {
        output -= prev
        output += prev * curr
        prev = prev * curr
      }
      curr = 0
    } else if (s[i] !== " ") {
      operator = s[i]
    }
    i++
  }
  return output
}

// stack
function calculate2(expr: string): number {
  let stack: number[] = [],
    integer = 0,
    operator = "+"

  for (let i = 0; i < expr.length; i++) {
    const char = expr[i]

    if (isDigit(char)) {
      integer = integer * 10 + Number.parseInt(char, 10)
    }
    if ((!isDigit(char) && !isSpace(char)) || i === expr.length - 1) {
      if (operator === "+") {
        stack.push(integer)
      } else if (operator === "-") {
        stack.push(-integer)
      } else if (operator === "*") {
        stack.push(stack.pop()! * integer)
      } else if (operator === "/") {
        stack.push(Math.trunc(stack.pop()! / integer))
      }

      integer = 0
      operator = char
    }
  }

  return stack.reduce((sum, number) => sum + number, 0)
}

function isDigit(char: string): boolean {
  return char >= "0" && char <= "9"
}

function isSpace(char: string): boolean {
  return char === " "
}
