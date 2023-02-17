/*

Rotting Oranges

Leetcode medium question - https://leetcode.com/problems/rotting-oranges/
*/

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

function orangesRotting(grid: number[][]): number {
  if (!grid.length && !grid[0].length) return -1

  const width = grid[0].length
  const height = grid.length
  const q: number[][] = []
  let healthy = 0
  let mins = -1

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] === 2) q.push([row, col])
      if (grid[row][col] === 1) healthy++
    }
  }

  if (!healthy) return 0

  while (q.length) {
    const sLength = q.length

    for (let i = 0; i < sLength; i++) {
      const [rotten_x, rotten_y] = q.shift() as number[]

      for (const dir of DIRS) {
        const [x, y] = dir
        const neighbor_x = rotten_x + x
        const neighbor_y = rotten_y + y
        if (
          neighbor_x >= 0 &&
          neighbor_x < height &&
          neighbor_y >= 0 &&
          neighbor_y < width &&
          grid[neighbor_x][neighbor_y] === 1
        ) {
          grid[neighbor_x][neighbor_y] = 2
          q.push([neighbor_x, neighbor_y])
          healthy--
        }
      }
    }
    mins++
  }

  return healthy > 0 ? -1 : mins
}
