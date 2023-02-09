/* 
String to Integer

Leetcode medium question - https://leetcode.com/problems/string-to-integer-atoi/description/

*/

function myAtoi(s: string): number {
  s = s.trim()
  if (
    ((s[0] === "-" || s[0] === "+") && isNaN(+s[1])) ||
    (s[0] !== "-" && s[0] !== "+" && isNaN(+s[0]))
  ) {
    return 0
  }
  const min = -Math.pow(2, 31)
  const max = Math.pow(2, 31) - 1
  let result = ""
  let i = 0

  while (i < s.length) {
    result += s[i]
    if (isNaN(+s[i + 1]) || s[i + 1] === " ") break
    i++
  }
  if (+result > max) return max
  if (+result < min) return min
  return +result
}
