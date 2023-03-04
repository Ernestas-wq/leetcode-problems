/*

Increasing Triplet Subsequence

Leetcode medium question - https://leetcode.com/problems/increasing-triplet-subsequence/
*/

function increasingTriplet(nums: number[]): boolean {
  const dp: number[] = []

  for (const num of nums) {
    const idx = find_lo(dp, num)
    if (idx < dp.length) dp[idx] = num
    else dp.push(num)

    if (dp.length > 2) return true
  }

  return false
}

function find_lo(arr: number[], x: number): number {
  let lo = 0
  let hi = arr.length
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2)
    if (arr[mid] < x) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return lo
}
