/* 

Find peak element

Leetcode medium question - https://leetcode.com/problems/find-peak-element/

*/

function findPeakElement(nums: number[]): number {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    const val = nums[mid]

    const left_val = nums[mid - 1] ?? -Infinity
    const right_val = nums[mid + 1] ?? -Infinity

    if (val > left_val && val > right_val) return mid
    else if (left_val < val && val < right_val) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return -1
}
