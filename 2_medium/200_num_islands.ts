/* 
Number of Islands

Leetcode medium question - https://leetcode.com/problems/number-of-islands/
*/
const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
function walk(
  row: number,
  col: number,
  grid: string[][],
  seen: boolean[][]
): void {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return
  if (grid[row][col] === "0") return
  if (seen[row][col]) return

  seen[row][col] = true

  for (const dir of DIRS) {
    const [x, y] = dir
    walk(row + x, col + y, grid, seen)
  }
}

export function numIslands(grid: string[][]): number {
  const seen = Array(grid.length)
    .fill(null)
    .map(() => Array(grid[0].length).fill(false))

  let island = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1" && !seen[i][j]) {
        walk(i, j, grid, seen)
        island++
      }
    }
  }

  return island
}
