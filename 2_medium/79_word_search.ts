/* 
Word search

Leetcode medium question - https://leetcode.com/problems/word-search/
*/
// my solution
function exist(board: string[][], word: string): boolean {
  if (!word) return true
  const m = board.length
  const n = board[0].length

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      // find start position and search all directions
      if (board[row][col] === word[0]) {
        const seen: boolean[][] = Array(m)
          .fill(null)
          .map(() => Array(n).fill(false))
        if (search(row, col, word, 0, seen, board)) return true
      }
    }
  }

  return false
}

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]
function search(
  row: number,
  col: number,
  word: string,
  currCharIdx: number,
  seen: boolean[][],
  board: string[][]
): boolean {
  // base cases:
  // we're off the board
  if (row < 0 || row >= board.length || col < 0 || col >= board[0].length)
    return false
  // the letter we're at is not the next in the string
  if (board[row][col] !== word[currCharIdx]) return false
  // we've seen this square
  if (seen[row][col]) return false
  // we found the end
  if (board[row][col] === word[currCharIdx] && currCharIdx === word.length - 1)
    return true

  // pre recurse - make it seen
  seen[row][col] = true

  // recurse 4 directions
  for (const dir of DIRS) {
    const [x, y] = dir
    if (search(row + x, col + y, word, currCharIdx + 1, seen, board))
      return true
  }

  // unsee last visited
  seen[row][col] = false

  return false
}
