/*
Maximum Subarray

Leetcode medium question - https://leetcode.com/problems/maximum-subarray/

O(n) time complexity
*/

function maxSubArray(nums: number[]): number {
  let max = nums[0]
  let curr = 0

  for (const n of nums) {
    if (curr < 0) curr = 0
    curr += n
    max = Math.max(curr, max)
  }

  return max
}
