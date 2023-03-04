/* 
Longest Increasing Subsequence

Leetcode medium - https://leetcode.com/problems/longest-increasing-subsequence/ 

*/

function lengthOfLIS(nums: number[]): number {
  const table = Array(nums.length).fill(1)

  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        table[i] = Math.max(table[i], 1 + table[j])
      }
    }
  }

  return Math.max(...table)
}
