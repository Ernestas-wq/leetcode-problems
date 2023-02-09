/* 

Pow

leetcode medium question https://leetcode.com/problems/powx-n/description/
*/

export function myPow(x: number, n: number): number {
  function help(x: number, n: number): number {
    if (x === 0) return 0
    if (n === 0) return 1

    let res = help(x, Math.floor(n / 2))
    res = res * res
    return n % 2 === 0 ? res : x * res
  }
  const result = help(x, Math.abs(n))
  return n > 0 ? result : 1 / result
}
