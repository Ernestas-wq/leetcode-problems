/*
3Sum

Leetcode medium question - https://leetcode.com/problems/3sum/
*/

function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b)
  const output: number[][] = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      // [-1, -1, 0, 1, 2, 4]
      let left = i + 1
      let right = nums.length - 1
      let sum = 0 - nums[i]
      while (left < right) {
        const currSum = nums[left] + nums[right]
        if (currSum === sum) {
          output.push([nums[i], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--
          left++
          right--
        } else if (currSum < sum) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return output
}
