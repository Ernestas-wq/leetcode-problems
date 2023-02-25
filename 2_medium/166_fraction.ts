/* 
Fraction to Recurring Decimal

Leetcode medium question - https://leetcode.com/problems/fraction-to-recurring-decimal/

*/

function fractionToDecimal(numerator: number, denominator: number): string {
  let output = ""

  if ((numerator > 0 && denominator < 0) || (numerator < 0 && denominator > 0))
    output += "-"

  let divisor = Math.abs(numerator)
  let dividend = Math.abs(denominator)
  let remainder = divisor % dividend
  output += Math.floor(divisor / dividend)

  const map: Record<number, number> = {} // fraction to index
  if (remainder === 0) return output
  output += "."

  while (remainder !== 0) {
    if (map[remainder]) {
      output =
        output.slice(0, map[remainder]) +
        "(" +
        output.slice(map[remainder]) +
        ")"
      break
    }
    map[remainder] = output.length
    remainder *= 10
    output += Math.floor(remainder / dividend)
    remainder %= dividend
  }
  return output
}
