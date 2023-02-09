/* 
climbing a staircase 

leetcode easy question https://leetcode.com/problems/climbing-stairs/

*/

const memo: { [id: number]: number } = {}
export function climbStairs(n: number): number {
  if (n in memo) return memo[n]
  if (n <= 0) return 0
  if (n === 2) return 2
  if (n === 1) return 1

  const result = climbStairs(n - 1) + climbStairs(n - 2)
  memo[n] = result

  return memo[n]
}
