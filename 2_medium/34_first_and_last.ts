/*
Find First and Last Position of Element in Sorted Array

Leetcode medium question - https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
*/
// my solution
export function searchRange(nums: number[], target: number): number[] {
  let left = 0
  let right = nums.length - 1
  let [first, last] = [-1, -1]

  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    const value = nums[mid]

    if (value === target) {
      first = last = mid
      // find first
      {
        let [l, r] = [left, mid - 1]
        while (l <= r) {
          const m = Math.floor((l + r) / 2)
          const v = nums[m]
          if (v === target && nums[m - 1] !== target) {
            first = m
            break
          } else if (v < target) {
            // go right
            l = l + 1
          } else {
            // go left
            r = m - 1
          }
        }
      }
      // find last
      {
        let [l, r] = [mid + 1, right]
        while (l <= r) {
          const m = Math.floor((l + r) / 2)
          const v = nums[m]
          if (v === target && nums[m + 1] !== target) {
            last = m
            break
          } else if (v > target) {
            // go left
            r = m - 1
          } else {
            // go right
            l = l + 1
          }
        }
      }
      return [first, last]
    } else if (target < value) {
      // go left
      right = mid - 1
    } else {
      // go right
      left = mid + 1
    }
  }

  return [first, last]
}

//cleaner but slower
export function search(nums: number[], target: number): number[] {
  return [bs(nums, target), bs(nums, target, false)]
}

function bs(nums: number[], target: number, goLeft: boolean = true): number {
  let l = 0
  let r = nums.length - 1
  let output = -1

  while (l <= r) {
    const m = Math.floor((l + r) / 2)

    if (target > nums[m]) l = m + 1
    else if (target < nums[m]) r = m - 1
    else {
      output = m
      if (goLeft) r = m - 1
      else l = m + 1
    }
  }

  return output
}
