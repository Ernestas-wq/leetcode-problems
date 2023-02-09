/*

Generate parenthesis

Leetcode medium question - https://leetcode.com/problems/generate-parentheses/

*/
// backtracking
function generateParenthesis(n: number): string[] {
  return backtrack(n, n, "", [])
}

function backtrack(
  open: number,
  close: number,
  curr: string,
  result: string[]
): string[] {
  if (open > close) return result
  if (open < 0 || close < 0) return result
  if (close === 0 && open === 0) {
    result.push(curr)
    return result
  }

  backtrack(open - 1, close, curr + "(", result)
  backtrack(open, close - 1, curr + ")", result)
  return result
}

function generateParenthesis2(n: number): string[] {
  const stack: string[] = []
  const result: string[] = []

  function backtrack(open: number, close: number) {
    if (open === close && open === n) {
      result.push(stack.join(""))
      return
    }
    if (open < n) {
      stack.push("(")
      backtrack(open + 1, close)
      stack.pop()
    }

    if (close < open) {
      stack.push(")")
      backtrack(open, close + 1)
      stack.pop()
    }
  }
  backtrack(0, 0)

  return result
}
