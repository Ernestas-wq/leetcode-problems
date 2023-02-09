/* 
Valid Parentheses

leetcode easy question  https://leetcode.com/problems/valid-parentheses/

*/
function isValid(s: string): boolean {
  if (!s.length) return true
  if (s.length % 2 !== 0) return false

  const map: { [id: string]: string } = {
    "{": "}",
    "[": "]",
    "(": ")",
  }

  let open: string[] = [] // open brackets

  for (let char of s) {
    // if is opening bracket push it to last opened brackets
    if (char in map) {
      open.push(char)
      continue
    }
    // if we match the last opened bracket pop it from stack / invalid otherwise
    if (map[open[open.length - 1]] === char) {
      open.pop()
    } else {
      return false
    }
  }

  // if we still have unclosed brackets was invalid
  return !open.length
}
