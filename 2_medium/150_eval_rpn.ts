/* 
Evaluate Reverse Polish Notation

Leetcode medium question - https://leetcode.com/problems/evaluate-reverse-polish-notation/
*/
// my solution
const OPERAND: { [id: string]: Function } = {
  "+": (a: number, b: number) => a + b,
  "-": (a: number, b: number) => b - a,
  "/": (a: number, b: number) => Math.trunc(b / a),
  "*": (a: number, b: number) => a * b,
}

export function evalRPN(tokens: string[]): number {
  const stack: number[] = []
  for (const t of tokens) {
    console.log(stack)
    if (!(t in OPERAND)) {
      stack.push(+t)
      continue
    }
    stack.push(OPERAND[t](stack.pop(), stack.pop()))
  }
  return stack[0]
}
