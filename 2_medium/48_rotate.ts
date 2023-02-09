/* 

Rotate image

Leetcode medium question https://leetcode.com/problems/rotate-image/
*/

// my solution
function rotate(matrix: number[][]): void {
  walk(matrix, 0, 0, matrix.length - 1, matrix.length - 1)
}

function walk(
  matrix: number[][],
  top: number,
  left: number,
  bot: number,
  right: number
): void {
  if (right < left || bot < top) return

  for (let i = 0; i < right - left; i++) {
    let temp = matrix[top][left + i]
    matrix[top][left + i] = matrix[bot - i][left]
    matrix[bot - i][left] = matrix[bot][right - i]
    matrix[bot][right - i] = matrix[top + i][right]
    matrix[top + i][right] = temp
  }

  walk(matrix, top + 1, left + 1, bot - 1, right - 1)
}

// other solution

function rotate_2(matrix: number[][]): void {
  let [l, r] = [0, matrix.length - 1]

  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      let [top, bot] = [l, r]
      let topLeft = matrix[top][l + i]
      matrix[top][l + i] = matrix[bot - i][l]
      matrix[bot - i][l] = matrix[bot][r - i]
      matrix[bot][r - i] = matrix[top + i][r]
      matrix[top + i][r] = topLeft
    }
    l++
    r--
  }
}
