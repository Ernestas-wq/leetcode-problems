/*
Trailing zeros

Leetcode medium question - https://leetcode.com/problems/factorial-trailing-zeroes/description/
*/

function trailingZeroes(n: number): number {
  let ans = 0
  while (n >= 5) {
    ans += Math.floor(n / 5)
    n = Math.floor(n / 5)
  }
  return ans
}
