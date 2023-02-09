/* 

Divide Two Integers

Leetcode medium question - https://leetcode.com/problems/divide-two-integers

*/

function divide(dividend: number, divisor: number): number {
  let dv = Math.abs(dividend)
  let d = Math.abs(divisor)

  const max = Math.pow(2, 31) - 1
  const min = -Math.pow(2, 31)
  let output = 0

  while (dv >= d) {
    let temp = d
    let multiplier = 1
    while (dv >= temp) {
      dv -= temp
      output += multiplier
      multiplier += multiplier
      temp += temp
    }
  }

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    output = -output
  }

  return Math.min(max, Math.max(min, output))
}
