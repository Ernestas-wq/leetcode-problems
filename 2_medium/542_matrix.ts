/* 
01 Matrix

Leetcode medium question - https://leetcode.com/problems/01-matrix/

*/

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

export function updateMatrix(mat: number[][]): number[][] {
  const list: number[][] = []
  const height = mat.length
  const width = mat[0].length
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (mat[row][col] === 0) {
        list.push([row, col])
      } else {
        mat[row][col] = -1
      }
    }
  }

  for (const [row, col] of list) {
    for (const [x, y] of DIRS) {
      const next_row = row + x
      const next_col = col + y

      if (
        next_row >= 0 &&
        next_row < height &&
        next_col >= 0 &&
        next_col < width &&
        mat[next_row][next_col] < 0
      ) {
        mat[next_row][next_col] = mat[row][col] + 1
        list.push([next_row, next_col])
      }
    }
  }
  return mat
}
