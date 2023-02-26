/*
Search a 2D Matrix II

Leetcode medium https://leetcode.com/problems/search-a-2d-matrix-ii/
*/

function searchMatrix(matrix: number[][], target: number): boolean {
  for (const row of matrix) {
    if (bs(row, target)) return true
  }
  return false
}

const bs = (nums: number[], needle: number): boolean => {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    const value = nums[mid]
    if (value === needle) return true
    else if (value < needle) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return false
}
