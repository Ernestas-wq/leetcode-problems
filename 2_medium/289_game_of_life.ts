/*

Game of Life

Leetcode medium question - https://leetcode.com/problems/game-of-life/
*/
const DIRS = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [-1, -1],
  [1, -1],
  [1, 1],
]

function gameOfLife(board: number[][]): void {
  const coordinatesToChange: number[][] = []
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (shouldChange(board, row, col)) {
        coordinatesToChange.push([row, col])
      }
    }
  }

  for (const [x, y] of coordinatesToChange) {
    // flip every coordinate that should change
    board[x][y] = board[x][y] === 1 ? 0 : 1
  }
}

function shouldChange(board: number[][], row: number, col: number): boolean {
  const liveNeighbours = getLiveNeighbours(board, row, col)
  if (board[row][col] === 0 && liveNeighbours === 3) return true
  if (board[row][col] === 1 && (liveNeighbours < 2 || liveNeighbours > 3)) {
    return true
  }
  return false
}

function getLiveNeighbours(
  board: number[][],
  row: number,
  col: number
): number {
  let output = 0
  const height = board.length
  const width = board[0].length
  for (const [x, y] of DIRS) {
    if (
      row + x >= 0 &&
      col + y >= 0 &&
      row + x < height &&
      col + y < width &&
      board[row + x][col + y] === 1
    ) {
      output++
    }
  }
  return output
}
