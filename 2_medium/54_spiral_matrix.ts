/* 

Spiral matrix 

Leetcode medium question - https://leetcode.com/problems/spiral-matrix/
*/
// my solution
function spiralOrder(matrix: number[][]): number[] {
  return walk(matrix, 0, matrix[0].length - 1, 0, matrix.length - 1, [])
}

function walk(
  matrix: number[][],
  l: number,
  r: number,
  top: number,
  bot: number,
  output: number[]
): number[] {
  if (r < l || bot < top) return output
  // get top row
  for (let i = l; i <= r; i++) {
    output.push(matrix[l][i])
  }
  // get right column
  for (let i = top + 1; i < bot; i++) {
    output.push(matrix[i][r])
  }

  // get bottom row if it's not the same as top row
  if (top !== bot) {
    for (let i = r; i >= l; i--) {
      output.push(matrix[bot][i])
    }
  }

  // get left col if it's not the same as right col
  if (l !== r) {
    for (let i = bot - 1; i > top; i--) {
      output.push(matrix[i][l])
    }
  }

  walk(matrix, l + 1, r - 1, top + 1, bot - 1, output)
  return output
}

// other solution

function spiral(matrix: number[][]): number[] {
  let result: number[] = []
  let [top, bottom] = [0, matrix.length - 1]
  let [left, right] = [0, matrix[0].length - 1]

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    top++
    for (let j = top; j <= bottom; j++) {
      result.push(matrix[j][right])
    }
    right--

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--
    }
    if (left <= right) {
      for (let j = bottom; j >= top; j--) {
        result.push(matrix[j][left])
      }
      left++
    }
  }
  return result
}
