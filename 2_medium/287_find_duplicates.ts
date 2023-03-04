/*
Find the Duplicate Number

Leetcode medium https://leetcode.com/problems/find-the-duplicate-number/
*/

function findDuplicate(nums: number[]): number {
  let [slow, fast] = [0, 0]
  // find cycle, fast moves by 2, slow by 1
  while (true) {
    slow = nums[slow]
    fast = nums[nums[fast]]
    if (slow === fast) break
  }
  let slow_2 = 0

  // start another slow from beginning, their meet point will be the result
  while (true) {
    slow = nums[slow]
    slow_2 = nums[slow_2]
    if (slow === slow_2) break
  }

  return slow
}
