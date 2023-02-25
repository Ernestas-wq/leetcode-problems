/* 
Largest Number

Leetcode medium question - https://leetcode.com/problems/largest-number/
*/

function largestNumber(nums: number[]): string {
  const output = nums.sort(compare)
  if (output[0] === 0) return "0"
  return output.join("")
}

function compare(a: number, b: number): number {
  let num1 = a.toString() + b.toString()
  let num2 = b.toString() + a.toString()
  if (num1.length > num2.length) return 1
  if (num1.length < num2.length) return -1
  let p1 = 0
  let p2 = 0

  while (p1 < num1.length) {
    if (+num1[p1] < +num2[p2]) {
      return 1
    }
    if (+num1[p1] > +num2[p2]) {
      return -1
    }
    p1++
    p2++
  }

  return 0
}
