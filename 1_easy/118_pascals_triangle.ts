/* 
Pascals triangle 

leetcode easy question - https://leetcode.com/problems/pascals-triangle/

*/

function makeRow(prev: number[]): number[] {
  const result: number[] = []

  for (let i = 0; i < prev.length + 1; i++) {
    result.push(prev[i - 1] + prev[i] || 1)
  }
  return result
}

function generate(numRows: number): number[][] {
  if (!numRows) return []
  if (numRows === 1) return [[1]]
  let prev = [1]
  const result = [prev]

  for (let i = 1; i < numRows; i++) {
    const next = makeRow(prev)
    result.push(next)
    prev = next
  }
  return result
}
