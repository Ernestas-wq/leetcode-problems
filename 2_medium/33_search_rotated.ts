/* 

Search in Rotated Sorted Array

Leetcode medium question - https://leetcode.com/problems/search-in-rotated-sorted-array/

*/

function search(nums: number[], target: number): number {
  if (nums.length === 1) return target === nums[0] ? 0 : -1
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    const value = nums[mid]

    if (value === target) return mid
    if (right === left) return -1
    if (nums[left] <= value && value <= nums[right]) {
      if (target > value) {
        // go rght
        left = mid + 1
      } else {
        // go left
        right = mid
      }
    } else if (value < nums[left]) {
      // right side sorted
      // [9,10,1,2,3,4,5,6]
      if (target > value && target <= nums[right]) {
        //go right
        left = mid + 1
      } else {
        // go left
        right = mid
      }
    } else {
      // left side
      // [7,8,9,10,11,12,1,2,3]
      if (target < value && target >= nums[left]) {
        //go left
        right = mid
      } else {
        //go right
        left = mid + 1
      }
    }
  }
  return -1
}
// v2
function search_2(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (target === nums[mid]) return mid

    // left sorted
    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    // right sorted
    else {
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }
  return -1
}
