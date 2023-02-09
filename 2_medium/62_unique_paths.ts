/* 

Unique Paths

Leetcode medium question - https://leetcode.com/problems/unique-paths/

*/

export function uniquePaths(m: number, n: number): number {
  function backtrack(
    m: number,
    n: number,
    memo: { [id: string]: number } = {}
  ): number {
    const key = `${m},${n}`
    if (key in memo) return memo[key]
    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0
    memo[key] = backtrack(m - 1, n, memo) + backtrack(m, n - 1, memo)
    return memo[key]
  }
  return backtrack(m, n)
}

// tabulated dp

function unique_paths(m: number, n: number): number {
  const table: number[][] = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))
  table[1][1] = 1

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const curr = table[i][j]
      if (j < n) {
        table[i][j + 1] += curr
      }
      if (i < m) {
        table[i + 1][j] += curr
      }
    }
  }
  return table[m][n]
}
