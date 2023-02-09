/* 
Surrounded Regions

Leetcode medium question https://leetcode.com/problems/surrounded-regions/
*/
const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
const O = "O"
const X = "X"
export function solve(board: string[][]): void {
  const m = board[0].length
  const n = board.length
  if (m <= 1 || n <= 1) return
  // go through edges
  // mark O's, that are connected to edge as ignored
  const ignore: boolean[][] = Array(n)
    .fill(null)
    .map(() => Array(m).fill(false))

  // top edge
  for (let i = 0; i < m; i++) {
    if (board[0][i] === O) help_solve(1, i, board, ignore)
  }

  // right edge
  for (let i = 1; i < n; i++) {
    if (board[i][m - 1] === O) help_solve(i, m - 2, board, ignore)
  }

  // bottom edge
  for (let i = 0; i < m - 1; i++) {
    if (board[n - 1][i] === O) help_solve(n - 2, i, board, ignore)
  }
  // left edge
  for (let i = 1; i < board.length - 1; i++) {
    if (board[i][0] === O) help_solve(i, 1, board, ignore)
  }

  // flip non ignored
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < m - 1; j++) {
      if (!ignore[i][j]) board[i][j] = X
    }
  }
}

function help_solve(
  row: number,
  col: number,
  board: string[][],
  ignore: boolean[][]
): void {
  // if not O
  if (board[row][col] === X) return
  // already ignored
  if (ignore[row][col]) return
  // off the map
  if (
    row < 1 ||
    row >= board.length - 1 ||
    col < 1 ||
    col >= board[0].length - 1
  )
    return

  ignore[row][col] = true

  for (const dir of DIRS) {
    const [x, y] = dir
    help_solve(row + x, col + y, board, ignore)
  }
}
