/* 

Sqrt(x)

leetcode - easy question https://leetcode.com/problems/sqrtx


*/

function mySqrt(x: number): number {
  let i = 1

  while (1) {
    if (i * i === x) {
      return i
    } else if (i * i > x) {
      return i - 1
    }
    i++
  }

  return i
}
