/*
3Sum Closest

Leetcode medium question - https://leetcode.com/problems/3sum-closest/

*/

function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b) // Sort the array in ascending order
  let closestSum = nums[0] + nums[1] + nums[2] // Initialize the closest sum
  let minDiff = Math.abs(closestSum - target) // Initialize the minimum difference

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right]
      const diff = Math.abs(currentSum - target)

      if (diff < minDiff) {
        minDiff = diff
        closestSum = currentSum
      }

      if (currentSum < target) {
        left++
      } else {
        right--
      }
    }
  }

  return closestSum
}
