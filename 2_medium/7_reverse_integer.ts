/* 
Reverse integer

Leetcode medium question - https://leetcode.com/problems/reverse-integer/
*/

function reverse(x: number): number {
  let result = 0
  let pop: number
  let isNegative = x < 0

  while (x !== 0) {
    pop = Math.abs(x) % 10
    x = Math.floor(Math.abs(x) / 10)

    result = result * 10 + pop
  }
  return isNegative ? -result : result
}
