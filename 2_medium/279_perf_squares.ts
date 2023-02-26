/*

Perfect Squares

Leetcode medium question - https://leetcode.com/problems/perfect-squares/
*/

// memo
function numSquares(n: number): number {
  const max_square = Math.floor(Math.sqrt(n))

  function dfs(currSum: number, memo: Record<number, number> = {}): number {
    if (currSum in memo) return memo[currSum]
    if (currSum === n) return 0
    if (currSum > n) return Infinity

    let min = Infinity
    for (let i = 1; i <= max_square; i++) {
      const result = dfs(currSum + i ** 2)
      memo[currSum] = result
      min = Math.min(min, result + 1)
    }
    memo[currSum] = min
    return min
  }

  return dfs(0)
}

// table

function num_squares(n: number): number {
  const table = Array(n + 1).fill(n)
  table[0] = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      table[i] = Math.min(table[i], table[i - j * j] + 1)
    }
  }

  return table[n]
}
