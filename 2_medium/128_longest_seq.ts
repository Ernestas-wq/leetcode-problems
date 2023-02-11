/* 
Longest Consecutive Sequence

Leetcode medium question - https://leetcode.com/problems/longest-consecutive-sequence/
*/

function longestConsecutive(nums: number[]): number {
  const set = new Set<number>(nums)
  let max = 0
  for (const num of set) {
    if (!set.has(num - 1)) {
      let seq = 0
      let curr = num
      while (set.has(curr)) {
        curr = curr + 1
        seq++
      }
      max = Math.max(max, seq)
    }
  }
  return max
}
