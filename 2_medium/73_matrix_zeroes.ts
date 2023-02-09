/* 
Set Matrix Zeroes

Leetcode medium question - https://leetcode.com/problems/set-matrix-zeroes/

*/
// my solution O(n + m) space
function setZeroes(matrix: number[][]): void {
  const cols = new Set<number>()
  const rows = new Set<number>()
  const m = matrix[0].length
  const n = matrix.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }

  for (const col of cols) {
    for (let i = 0; i < n; i++) {
      matrix[i][col] = 0
    }
  }

  for (const row of rows) {
    for (let i = 0; i < m; i++) {
      matrix[row][i] = 0
    }
  }
}

// O(1) space

function set_zeroes(matrix: number[][]) {
  let col0 = 1
  let rows = matrix.length
  let cols = matrix[0].length

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      col0 = 0
    }
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = matrix[0][j] = 0
      }
    }
  }

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 1; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
    if (col0 === 0) {
      matrix[i][0] = 0
    }
  }
}
