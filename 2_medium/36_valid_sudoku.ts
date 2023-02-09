/* 
Valid Sudoku

Leetcode medium question - https://leetcode.com/problems/valid-sudoku/

*/
// my solution
export function isValidSudoku(board: string[][]): boolean {
  return check_rows(board) && check_cols(board) && check_grids(board)
}

function check_grids(
  board: string[][],
  row: number = 0,
  col: number = 0
): boolean {
  if (row >= board.length || col >= board.length) return true
  let map: { [id: string]: boolean } = {}
  for (let i = row; i < row + 3 && i < board.length; i++) {
    for (let j = col; j < col + 3 && j < board.length; j++) {
      const c = board[i][j]
      if (c === ".") continue
      if (c in map) return false
      map[c] = true
    }
  }

  return check_grids(board, row + 3, col) && check_grids(board, row, col + 3)
}

function check_rows(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    let map: { [id: string]: boolean } = {}
    for (let c of row) {
      if (c in map) return false
      if (c === ".") continue
      map[c] = true
    }
    map = {}
  }

  return true
}

function check_cols(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    let map: { [id: string]: boolean } = {}

    for (let k = 0; k < board.length; k++) {
      const c = board[k][i]
      if (c in map) return false
      if (c === ".") continue
      map[c] = true
    }
    map = {}
  }

  return true
}

// other solution

function is_valid(board: string[][]): boolean {
  const rows: { [id: string]: Set<string> } = {}
  const cols: { [id: string]: Set<string> } = {}
  const squares: { [id: string]: Set<string> } = {} // key = r/3,c/3

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      const curr = board[row][col]
      const squareKey = `${Math.floor(row / 3)}${Math.floor(col / 3)}`
      if (curr === ".") continue
      if (
        rows[row]?.has(curr) ||
        cols[col]?.has(curr) ||
        squares[squareKey]?.has(curr)
      ) {
        return false
      }
      if (!rows[row]) rows[row] = new Set<string>()
      if (!cols[col]) cols[col] = new Set<string>()
      if (!squares[squareKey]) squares[squareKey] = new Set<string>()
      rows[row].add(board[row][col])
      cols[col].add(board[row][col])
      squares[squareKey].add(board[row][col])
    }
  }

  return true
}
