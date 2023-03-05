// brute force
function kthSmallest(matrix: number[][], k: number): number {
  const nums = Array(matrix.length ** 2).fill(0)
  let idx = 0

  for (const row of matrix) {
    for (const num of row) {
      nums[idx] = num
      idx++
    }
  }
  nums.sort((a, b) => a - b)
  return nums[k - 1]
}

// Binary
function kth_smallest(matrix: number[][], k: number): number {
  const n = matrix.length
  let [min, max] = [matrix[0][0], matrix[n - 1][n - 1]]

  while (min !== max) {
    const mid = Math.floor((max + min) / 2)
    const c = count(mid)
    if (c < k) min = mid + 1
    else {
      max = mid
    }
  }

  function count(mid: number): number {
    let count = 0
    let row = 0
    let col = n - 1
    while (row < n && col >= 0) {
      if (matrix[row][col] <= mid) {
        count += col + 1
        row++
      } else {
        col--
      }
    }
    return count
  }
  return min
}
