/* 
Binary search

Leetcode easy question 

*/

export function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  let mid = Math.floor((right - left) / 2)
  // [-1,0,3,5,9,12]
  while (left <= right) {
    const value = nums[mid]
    if (value === target) return mid
    if (value < target) {
      // go right
      left = mid + 1
    } else {
      // go left
      right = mid - 1
    }
  }
  return -1
}
