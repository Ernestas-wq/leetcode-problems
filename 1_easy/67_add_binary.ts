/* 

Add binary strings

Leetcode easy question - https://leetcode.com/problems/add-binary/description/
*/

export function addBinary(a: string, b: string): string {
  let lastA = a.length - 1
  let lastB = b.length - 1
  let carry = 0
  let output = ""

  while (lastA >= 0 || lastB >= 0) {
    let digitA = +a[lastA] || 0
    let digitB = +b[lastB] || 0

    const res = digitA + digitB + carry
    const char = res % 2
    output = char + output
    carry = Math.floor(res / 2)
    lastA--
    lastB--
  }

  return carry ? carry + output : output
}
